import React from 'react';
import {ScrollView, View, Button, Text, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
import TextInput from '../components/TextInput';
import Theme from '../theme';
import LoadingSpinner from '../components/LoadingSpinner';
import {LocalStorage, LocalStorageKeys} from '../utils/LocalStorage';

interface IErrorState {
  name: string;
  age: string;
  date: string;
  locality: string;
  numberOfGuest: string;
  address: string;
}

interface IAddParticipantState {
  name: string;
  age: string;
  date: string;
  locality: string;
  numberOfGuest: string;
  address: string;
  loading: boolean;
  errors: IErrorState;
}

interface IVailFormReturn {
  status: boolean;
  errors: IErrorState;
}

const initialError = {
  name: '',
  age: '',
  date: '',
  locality: '',
  numberOfGuest: '',
  address: '',
};

class AddParticipantScreen extends React.PureComponent<
  any,
  IAddParticipantState
> {
  public state = {
    name: '',
    age: '',
    date: '',
    locality: '',
    numberOfGuest: '',
    address: '',
    loading: false,
    errors: initialError,
  };

  render(): React.ReactElement {
    const {
      name,
      address,
      age,
      errors,
      locality,
      numberOfGuest,
      date,
      loading,
    } = this.state;
    const onNameChange = (value: string) => this.onChangeValue('name', value);
    const onAgeChange = (value: string) => this.onChangeValue('age', value);
    const onDateChange = (value: string) => this.onChangeValue('date', value);
    const onLocalityChange = (value: string) =>
      this.onChangeValue('locality', value);
    const onNumberOfGuestChange = (value: string) =>
      this.onChangeValue('numberOfGuest', value);
    const onAddressChange = (value: string) =>
      this.onChangeValue('address', value, 50);
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{padding: 5, marginVertical: 20}}>
          <TextInput
            title={'Name'}
            value={name}
            onChangeText={onNameChange}
            placeholder={'Please Enter the Name'}
            errorMessage={errors.name}
          />
          <TextInput
            title={'Age'}
            value={age}
            onChangeText={onAgeChange}
            placeholder={'Please Enter the age'}
            errorMessage={errors.age}
            maxLength={2}
            keyboardType={'number-pad'}
          />
          <View style={{margin: 5}}>
            <Text style={{fontSize: Theme.font.text.text, paddingVertical: 5}}>
              {'Date'}
            </Text>
            <DatePicker
              style={{width: 200}}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              showIcon={false}
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  backgroundColor: Theme.colors.input.background,
                  borderWidth: 0,
                },
                placeholderText: {
                  color: Theme.colors.mediumGray,
                },
              }}
              onDateChange={onDateChange}
            />
          </View>
          <TextInput
            title={'Locality'}
            value={locality}
            onChangeText={onLocalityChange}
            placeholder={'Please Enter the Locality'}
            errorMessage={errors.locality}
          />
          <TextInput
            title={'Number of Guests (max 2 members)'}
            value={numberOfGuest}
            onChangeText={onNumberOfGuestChange}
            placeholder={'Please Enter the Number of Guests'}
            errorMessage={errors.numberOfGuest}
            maxLength={1}
            keyboardType={'number-pad'}
          />
          <TextInput
            title={`Address (max 50 ${
              address.length > 0 ? ' : ' + address.length : ''
            } )`}
            value={address}
            onChangeText={onAddressChange}
            placeholder={'Please Enter the Address'}
            errorMessage={errors.address}
            multiline={true}
            style={{height: 50}}
          />
          <View>
            <Button title={'Add'} onPress={this.onSubmitPress} />
          </View>
        </ScrollView>
        <LoadingSpinner visible={loading} />
      </View>
    );
  }

  onChangeValue = (key: string, value: string, length?: number): void => {
    const {errors} = this.state;
    if (length && value.length > length) {
      return;
    }

    // @ts-ignore
    this.setState({
      [key]: value,
      errors: {
        ...errors,
        [key]: '',
      },
    });
  };

  onSubmitPress = async () => {
    const {address, date, numberOfGuest, locality, age, name} = this.state;
    const validFromError: IVailFormReturn = this.isValidData();
    if (validFromError.status) {
      this.setState({errors: {...initialError, ...validFromError.errors}});
      return;
    }
    this.updateLoading();

    setTimeout(async () => {
      const item = {
        id: Math.random().toFixed(0),
        name,
        age,
        DOB: date,
        locality,
        guest: numberOfGuest,
        address,
      };
      let data: any[] | null = [];
      const fetchData = await LocalStorage.get<string>(
        LocalStorageKeys.USER_DATA,
      );
      if (fetchData) {
        data.push(item);
        data.push(...JSON.parse(fetchData));
      } else {
        data.push(item);
      }
      await LocalStorage.set(LocalStorageKeys.USER_DATA, JSON.stringify(data));
      this.updateLoading();
      this.resetTheFrom();
    }, 2000);
    //
  };

  resetTheFrom = () => {
    this.setState({
      name: '',
      age: '',
      date: '',
      locality: '',
      numberOfGuest: '',
      address: '',
    });
  };

  updateLoading = () => {
    const {loading} = this.state;
    this.setState({loading: !loading});
  };

  isValidData = (): IVailFormReturn => {
    const {address, date, numberOfGuest, locality, age, name} = this.state;
    const errors: IErrorState = {...initialError};
    this.setState({errors: {...errors}});
    console.log('[[[98989>>>>>>>>', errors);
    let status: boolean = false;
    if (name.length < 1) {
      status = true;
      errors.name = 'fill the input';
    }
    if (age.length < 1) {
      status = true;
      errors.age = 'fill the input';
    }
    if (date.length < 1) {
      status = true;
      errors.date = 'fill the input';
    }
    if (numberOfGuest.length < 1) {
      status = true;
      errors.numberOfGuest = 'fill the input';
    }
    if (address.length < 1) {
      status = true;
      errors.address = 'fill the input';
    }
    if (locality.length < 1) {
      status = true;
      errors.locality = 'fill the input';
    }
    console.log('err', errors);
    return {
      errors,
      status,
    };
  };
}

export default AddParticipantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
