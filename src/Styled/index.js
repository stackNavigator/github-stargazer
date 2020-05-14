import styled from 'styled-components/native'

export const CenteredView = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListItemView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
`

export const ListItemText = styled.Text`
  font-size: 20px;
`

export const ItemSeparator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`