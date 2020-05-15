import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const CenteredView = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TopView = styled.View`
  height: 100%;
  display: flex;
  margin: 15px;
`

export const DetailsContainer = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`

export const DetailsView = styled.View`
  display: flex;
  padding: 10px;
`

export const ListItemView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
`

export const InfoText = styled.Text`
  font-size: 20px;
  color: ${({ color }) => color ? color : '#000'};
`

export const DetailsText = styled.Text`
  padding: 5px 0;
  font-size: 20px;
  text-transform: capitalize;
`

export const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const ErrorText = styled.Text`
  font-size: 20px;
  color: #f00;
  margin: 10px 0;
`

export const ItemSeparator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`

export const Input = styled.TextInput`
  width: 100%;
  color: #000;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 10px 5px;
`

export const AddActionButton = styled.Text`
  font-size: 30px;
  margin-right: 15px;
  color: ${() => Platform.OS === 'android' ? '#000' : '#1a75ff'}
`

export const ConfirmButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  font-size: 25px;
  margin: 10px 0;
  padding: 10px 0;
  background-color: #1a75ff;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`