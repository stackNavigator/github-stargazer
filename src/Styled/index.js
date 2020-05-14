import styled from 'styled-components/native'

export const CenteredView = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DetailsContainer = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`

export const ListItemView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
`

export const InfoText = styled.Text`
  font-size: 20px;
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

export const ItemSeparator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`

export const DetailsView = styled.View`
  display: flex;
  padding: 10px;
`