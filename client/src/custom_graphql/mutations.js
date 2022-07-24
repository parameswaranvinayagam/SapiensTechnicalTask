export const createAssetTypeMetaData = /* GraphQL */ `
  mutation CreateAssetTypeMetaData(
    $input: CreateAssetTypeMetaDataInput!
    $condition: ModelassetTypeMetaDataConditionInput
  ) {
    createAssetTypeMetaData(input: $input, condition: $condition) {
      id
      keyID
      value
      unit
      assetType
      createdAt
      updatedAt
      key {
        id
        key
        displayName
        type
        groupedBy
        restrictedValues
        restrictedUnits
        createdAt
        updatedAt
      }
    }
  }
`;
