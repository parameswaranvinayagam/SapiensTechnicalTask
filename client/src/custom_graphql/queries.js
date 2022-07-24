export const listQRCodes = /* GraphQL */ `
  query assets(
    $filter: ModelassetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetUniqueId
        redirectUrl
        status
        lastEventAt
        lastEventId
        vendor {
          id
          name
        }
        asset_type {
          id
          name
        }
      }
      nextToken
    }
  }
`;

export const listAssetTypeWithVendor = /* GraphQL */ `
  query assetTypeWithVendor(
    $filter: ModelassetTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        vendor {
          id
          name
        }
      }
    }
  }
`;

export const listAssetTypeMetaDatas = /* GraphQL */ `
  query ListAssetTypeMetaDatas(
    $filter: ModelassetTypeMetaDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetTypeMetaDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        keyID
        value
        unit
        assetType
        createdAt
        updatedAt
        key {
          restrictedUnits
          restrictedValues
          displayName
          groupedBy
          id
          key
          type
        }
      }
      nextToken
    }
  }
`;

export const listMasterEventTypes = /* GraphQL */ `
  query MasterEventTypesWithAttributes {
    listMasterEventTypes {
      items {
        type
        id
        displayName
        attributes {
          items {
            displayName
            id
            key
            masterEventTypeId
          }
        }
      }
    }
  }
`;

export const listAssetTypeEventTypeAttributeMappings = /* GraphQL */ `
  query MasterEventTypesWithAttributes(
    $filter: ModelassetTypeEventTypeAttributeMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetTypeEventTypeAttributeMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        masterEventTypeAttribute {
          displayName
          id
          key
          masterEventTypeId
          masterEventType {
            displayName
            id
            type
            attributes {
              items {
                displayName
                id
                key
                masterEventTypeId
              }
            }
          }
        }
        id
        assetTypeId
        masterEventTypeAttributeId
      }
    }
  }
`;

export const listVendorLocations = /* GraphQL */ `
  query ListVendorLocations(
    $filter: ModelvendorLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        id
        isArchived
        locationType
        title
        updatedAt
        createdAt
        vendorLocationVendorId
        vendor {
          activeFrom
          activeTo
          address
          createdAt
          id
          isArchived
          name
          redirectUrl
          updatedAt
          vendorLogo
        }
      }
    }
  }
`;
