/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMasterAssetTypeKey = /* GraphQL */ `
  query GetMasterAssetTypeKey($id: ID!) {
    getMasterAssetTypeKey(id: $id) {
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
`;
export const listMasterAssetTypeKeys = /* GraphQL */ `
  query ListMasterAssetTypeKeys(
    $filter: ModelmasterAssetTypeKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMasterAssetTypeKeys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAssetTypeMetaData = /* GraphQL */ `
  query GetAssetTypeMetaData($id: ID!) {
    getAssetTypeMetaData(id: $id) {
      id
      keyID
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
      value
      unit
      assetType
      createdAt
      updatedAt
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
      }
      nextToken
    }
  }
`;
export const getMasterEventType = /* GraphQL */ `
  query GetMasterEventType($id: ID!) {
    getMasterEventType(id: $id) {
      id
      displayName
      type
      attributes {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMasterEventTypes = /* GraphQL */ `
  query ListMasterEventTypes(
    $filter: ModelmasterEventTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMasterEventTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        displayName
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMasterEventTypeAttribute = /* GraphQL */ `
  query GetMasterEventTypeAttribute($id: ID!) {
    getMasterEventTypeAttribute(id: $id) {
      id
      key
      displayName
      masterEventTypeId
      masterEventType {
        id
        displayName
        type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMasterEventTypeAttributes = /* GraphQL */ `
  query ListMasterEventTypeAttributes(
    $filter: ModelmasterEventTypeAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMasterEventTypeAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        displayName
        masterEventTypeId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  query GetAssetTypeEventTypeAttributeMapping($id: ID!) {
    getAssetTypeEventTypeAttributeMapping(id: $id) {
      id
      assetTypeId
      masterEventTypeAttributeId
      masterEventTypeAttribute {
        id
        key
        displayName
        masterEventTypeId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      assetType {
        id
        name
        vendorId
        smarthubId
        assetTypeEnvironmentImpactConfigId
        createdAt
        updatedAt
      }
    }
  }
`;
export const listAssetTypeEventTypeAttributeMappings = /* GraphQL */ `
  query ListAssetTypeEventTypeAttributeMappings(
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
        id
        assetTypeId
        masterEventTypeAttributeId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetEventHistoryMetaData = /* GraphQL */ `
  query GetAssetEventHistoryMetaData($id: ID!) {
    getAssetEventHistoryMetaData(id: $id) {
      id
      key
      value
      createdAt
      updatedAt
      assetEventHistory {
        id
        assetEventHistoryAssetId
        assetUniqueId
        eventType
        vendorId
        createdAt
        isValid
        updatedAt
      }
    }
  }
`;
export const listAssetEventHistoryMetaDatas = /* GraphQL */ `
  query ListAssetEventHistoryMetaDatas(
    $filter: ModelassetEventHistoryMetaDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetEventHistoryMetaDatas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendorLocation = /* GraphQL */ `
  query GetVendorLocation($id: ID!) {
    getVendorLocation(id: $id) {
      id
      vendorLocationVendorId
      title
      locationType
      address
      isArchived
      createdAt
      updatedAt
      vendor {
        id
        name
        redirectUrl
        vendorLogo
        activeFrom
        activeTo
        address
        isArchived
        createdAt
        updatedAt
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
        id
        vendorLocationVendorId
        title
        locationType
        address
        isArchived
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendorEventAttribute = /* GraphQL */ `
  query GetVendorEventAttribute($id: ID!) {
    getVendorEventAttribute(id: $id) {
      id
      key
      displayName
      adminName
      assetEvents
      locale
      createdAt
      updatedAt
      vendor {
        id
        name
        redirectUrl
        vendorLogo
        activeFrom
        activeTo
        address
        isArchived
        createdAt
        updatedAt
      }
    }
  }
`;
export const listVendorEventAttributes = /* GraphQL */ `
  query ListVendorEventAttributes(
    $filter: ModelvendorEventAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorEventAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        displayName
        adminName
        assetEvents
        locale
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModeluserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getApiRegistry = /* GraphQL */ `
  query GetApiRegistry($id: ID!) {
    getApiRegistry(id: $id) {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const listApiRegistrys = /* GraphQL */ `
  query ListApiRegistrys(
    $filter: ModelapiRegistryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApiRegistrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apiType
        url
        apiKey
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  query GetAssetTypeEnvironmentImpactConfig($id: ID!) {
    getAssetTypeEnvironmentImpactConfig(id: $id) {
      id
      assetTypeId
      vendorId
      filledPlasticBottleSavingVal
      filledPlasticBottleSavingUnit
      refilledPlasticBottleSavingVal
      refilledPlasticBottleSavingUnit
      prefilledPlasticBottleSavingVal
      prefilledPlasticBottleSavingUnit
      refilledCO2SavingVal
      refilledCO2SavingUnit
      returnedCO2SavingVal
      returnedCO2SavingUnit
      refilledTreeSavingPageSize
      returnedTreeSavingPageSize
      createdAt
      updatedAt
      assetType {
        id
        name
        vendorId
        smarthubId
        assetTypeEnvironmentImpactConfigId
        createdAt
        updatedAt
      }
    }
  }
`;
export const listAssetTypeEnvironmentImpactConfigs = /* GraphQL */ `
  query ListAssetTypeEnvironmentImpactConfigs(
    $filter: ModelassetTypeEnvironmentImpactConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetTypeEnvironmentImpactConfigs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetTypeId
        vendorId
        filledPlasticBottleSavingVal
        filledPlasticBottleSavingUnit
        refilledPlasticBottleSavingVal
        refilledPlasticBottleSavingUnit
        prefilledPlasticBottleSavingVal
        prefilledPlasticBottleSavingUnit
        refilledCO2SavingVal
        refilledCO2SavingUnit
        returnedCO2SavingVal
        returnedCO2SavingUnit
        refilledTreeSavingPageSize
        returnedTreeSavingPageSize
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetEnvironmentImpact = /* GraphQL */ `
  query GetAssetEnvironmentImpact($id: ID!) {
    getAssetEnvironmentImpact(id: $id) {
      id
      assetQRCode
      assetId
      vendorId
      filledCount
      refilledCount
      returnedCount
      prefilledCount
      customerFilledCount
      customerRefilledCount
      customerReturnedCount
      customerPrefilledCount
      plasticBottlesSavedCount
      CO2SavedVal
      CO2SavedUnit
      refilledTreesPlantedCount
      returnedTreesPlantedCount
      treesPlantedCount
      activeCustomerId
      customerPlasticBottlesSavedCount
      customerCO2SavedVal
      customerRefilledTreesPlantedCount
      customerReturnedTreesPlantedCount
      customerTreesPlantedCount
      customerAcquiredAt
      customerAcquiredLocation
      customerLastFilledAt
      customerLastFilledLocation
      createdAt
      updatedAt
      asset {
        id
        assetUniqueId
        redirectUrl
        activeCustomerId
        activeProductId
        customerAcquiredAt
        customerLastFilledAt
        lastEventAt
        lastEventId
        customerFillCount
        filledAt
        returnedAt
        assetTypeId
        status
        vendorId
        assetEnvironmentImpactId
        createdAt
        updatedAt
      }
    }
  }
`;
export const listAssetEnvironmentImpacts = /* GraphQL */ `
  query ListAssetEnvironmentImpacts(
    $filter: ModelassetEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetEnvironmentImpacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetQRCode
        assetId
        vendorId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        customerFilledCount
        customerRefilledCount
        customerReturnedCount
        customerPrefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        treesPlantedCount
        activeCustomerId
        customerPlasticBottlesSavedCount
        customerCO2SavedVal
        customerRefilledTreesPlantedCount
        customerReturnedTreesPlantedCount
        customerTreesPlantedCount
        customerAcquiredAt
        customerAcquiredLocation
        customerLastFilledAt
        customerLastFilledLocation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendorEnvironmentImpact = /* GraphQL */ `
  query GetVendorEnvironmentImpact($id: ID!) {
    getVendorEnvironmentImpact(id: $id) {
      id
      vendorId
      filledCount
      refilledCount
      returnedCount
      prefilledCount
      plasticBottlesSavedCount
      CO2SavedVal
      CO2SavedUnit
      refilledTreesPlantedCount
      returnedTreesPlantedCount
      treesPlantedCount
      revoCustomerCount
      createdAt
      updatedAt
    }
  }
`;
export const listVendorEnvironmentImpacts = /* GraphQL */ `
  query ListVendorEnvironmentImpacts(
    $filter: ModelvendorEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorEnvironmentImpacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vendorId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        treesPlantedCount
        revoCustomerCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerEnvironmentImpact = /* GraphQL */ `
  query GetCustomerEnvironmentImpact($id: ID!) {
    getCustomerEnvironmentImpact(id: $id) {
      id
      customerId
      filledCount
      refilledCount
      returnedCount
      prefilledCount
      plasticBottlesSavedCount
      CO2SavedVal
      CO2SavedUnit
      refilledTreesPlantedCount
      returnedTreesPlantedCount
      refilledPendingForNextTree
      returnedPendingForNextTree
      treesPlantedCount
      signedUp
      createdAt
      updatedAt
    }
  }
`;
export const listCustomerEnvironmentImpacts = /* GraphQL */ `
  query ListCustomerEnvironmentImpacts(
    $filter: ModelcustomerEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerEnvironmentImpacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        refilledPendingForNextTree
        returnedPendingForNextTree
        treesPlantedCount
        signedUp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vendorEventAttributesByAssetEvents = /* GraphQL */ `
  query VendorEventAttributesByAssetEvents(
    $assetEvents: String
    $sortDirection: ModelSortDirection
    $filter: ModelvendorEventAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorEventAttributesByAssetEvents(
      assetEvents: $assetEvents
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        displayName
        adminName
        assetEvents
        locale
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const vendorEventAttributesByKey = /* GraphQL */ `
  query VendorEventAttributesByKey(
    $key: String
    $sortDirection: ModelSortDirection
    $filter: ModelvendorEventAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    vendorEventAttributesByKey(
      key: $key
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        key
        displayName
        adminName
        assetEvents
        locale
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const apiDetailsByApiType = /* GraphQL */ `
  query ApiDetailsByApiType(
    $apiType: String
    $sortDirection: ModelSortDirection
    $filter: ModelapiRegistryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apiDetailsByAPIType(
      apiType: $apiType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apiType
        url
        apiKey
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetTypeId = /* GraphQL */ `
  query AssetTypeId(
    $assetTypeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelassetTypeEnvironmentImpactConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetTypeId(
      assetTypeId: $assetTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetTypeId
        vendorId
        filledPlasticBottleSavingVal
        filledPlasticBottleSavingUnit
        refilledPlasticBottleSavingVal
        refilledPlasticBottleSavingUnit
        prefilledPlasticBottleSavingVal
        prefilledPlasticBottleSavingUnit
        refilledCO2SavingVal
        refilledCO2SavingUnit
        returnedCO2SavingVal
        returnedCO2SavingUnit
        refilledTreeSavingPageSize
        returnedTreeSavingPageSize
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetQrCode = /* GraphQL */ `
  query AssetQrCode(
    $assetQRCode: String
    $sortDirection: ModelSortDirection
    $filter: ModelassetEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetQRCode(
      assetQRCode: $assetQRCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetQRCode
        assetId
        vendorId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        customerFilledCount
        customerRefilledCount
        customerReturnedCount
        customerPrefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        treesPlantedCount
        activeCustomerId
        customerPlasticBottlesSavedCount
        customerCO2SavedVal
        customerRefilledTreesPlantedCount
        customerReturnedTreesPlantedCount
        customerTreesPlantedCount
        customerAcquiredAt
        customerAcquiredLocation
        customerLastFilledAt
        customerLastFilledLocation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetId = /* GraphQL */ `
  query AssetId(
    $assetId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelassetEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetId(
      assetId: $assetId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetQRCode
        assetId
        vendorId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        customerFilledCount
        customerRefilledCount
        customerReturnedCount
        customerPrefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        treesPlantedCount
        activeCustomerId
        customerPlasticBottlesSavedCount
        customerCO2SavedVal
        customerRefilledTreesPlantedCount
        customerReturnedTreesPlantedCount
        customerTreesPlantedCount
        customerAcquiredAt
        customerAcquiredLocation
        customerLastFilledAt
        customerLastFilledLocation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activeCustomerId = /* GraphQL */ `
  query ActiveCustomerId(
    $activeCustomerId: String
    $sortDirection: ModelSortDirection
    $filter: ModelassetEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activeCustomerId(
      activeCustomerId: $activeCustomerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetQRCode
        assetId
        vendorId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        customerFilledCount
        customerRefilledCount
        customerReturnedCount
        customerPrefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        treesPlantedCount
        activeCustomerId
        customerPlasticBottlesSavedCount
        customerCO2SavedVal
        customerRefilledTreesPlantedCount
        customerReturnedTreesPlantedCount
        customerTreesPlantedCount
        customerAcquiredAt
        customerAcquiredLocation
        customerLastFilledAt
        customerLastFilledLocation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const customerId = /* GraphQL */ `
  query CustomerId(
    $customerId: String
    $sortDirection: ModelSortDirection
    $filter: ModelcustomerEnvironmentImpactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customerId(
      customerId: $customerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        refilledPendingForNextTree
        returnedPendingForNextTree
        treesPlantedCount
        signedUp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetType = /* GraphQL */ `
  query GetAssetType($id: ID!) {
    getAssetType(id: $id) {
      id
      name
      vendorId
      smarthubId
      metaData {
        nextToken
      }
      assetTypeEnvironmentImpactConfigId
      assetTypeEnvironmentImpactConfig {
        id
        assetTypeId
        vendorId
        filledPlasticBottleSavingVal
        filledPlasticBottleSavingUnit
        refilledPlasticBottleSavingVal
        refilledPlasticBottleSavingUnit
        prefilledPlasticBottleSavingVal
        prefilledPlasticBottleSavingUnit
        refilledCO2SavingVal
        refilledCO2SavingUnit
        returnedCO2SavingVal
        returnedCO2SavingUnit
        refilledTreeSavingPageSize
        returnedTreeSavingPageSize
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      vendor {
        id
        name
        redirectUrl
        vendorLogo
        activeFrom
        activeTo
        address
        isArchived
        createdAt
        updatedAt
      }
    }
  }
`;
export const listAssetTypes = /* GraphQL */ `
  query ListAssetTypes(
    $filter: ModelassetTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        vendorId
        smarthubId
        assetTypeEnvironmentImpactConfigId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAsset = /* GraphQL */ `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
      id
      assetUniqueId
      redirectUrl
      activeCustomerId
      activeProductId
      customerAcquiredAt
      customerLastFilledAt
      lastEventAt
      lastEventId
      customerFillCount
      filledAt
      returnedAt
      assetTypeId
      status
      vendorId
      assetEnvironmentImpactId
      assetEnvironmentImpact {
        id
        assetQRCode
        assetId
        vendorId
        filledCount
        refilledCount
        returnedCount
        prefilledCount
        customerFilledCount
        customerRefilledCount
        customerReturnedCount
        customerPrefilledCount
        plasticBottlesSavedCount
        CO2SavedVal
        CO2SavedUnit
        refilledTreesPlantedCount
        returnedTreesPlantedCount
        treesPlantedCount
        activeCustomerId
        customerPlasticBottlesSavedCount
        customerCO2SavedVal
        customerRefilledTreesPlantedCount
        customerReturnedTreesPlantedCount
        customerTreesPlantedCount
        customerAcquiredAt
        customerAcquiredLocation
        customerLastFilledAt
        customerLastFilledLocation
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      asset_type {
        id
        name
        vendorId
        smarthubId
        assetTypeEnvironmentImpactConfigId
        createdAt
        updatedAt
      }
      assetEventHistories {
        nextToken
      }
      vendor {
        id
        name
        redirectUrl
        vendorLogo
        activeFrom
        activeTo
        address
        isArchived
        createdAt
        updatedAt
      }
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $filter: ModelassetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assetUniqueId
        redirectUrl
        activeCustomerId
        activeProductId
        customerAcquiredAt
        customerLastFilledAt
        lastEventAt
        lastEventId
        customerFillCount
        filledAt
        returnedAt
        assetTypeId
        status
        vendorId
        assetEnvironmentImpactId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByAssetUniqueId = /* GraphQL */ `
  query AssetsByAssetUniqueId(
    $assetUniqueId: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelassetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByAssetUniqueId(
      assetUniqueId: $assetUniqueId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetUniqueId
        redirectUrl
        activeCustomerId
        activeProductId
        customerAcquiredAt
        customerLastFilledAt
        lastEventAt
        lastEventId
        customerFillCount
        filledAt
        returnedAt
        assetTypeId
        status
        vendorId
        assetEnvironmentImpactId
        createdAt
        updatedAt
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
export const assetsByStatus = /* GraphQL */ `
  query AssetsByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelassetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetUniqueId
        redirectUrl
        activeCustomerId
        activeProductId
        customerAcquiredAt
        customerLastFilledAt
        lastEventAt
        lastEventId
        customerFillCount
        filledAt
        returnedAt
        assetTypeId
        status
        vendorId
        assetEnvironmentImpactId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByCustomer = /* GraphQL */ `
  query AssetsByCustomer(
    $activeCustomerId: String
    $sortDirection: ModelSortDirection
    $filter: ModelassetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByCustomer(
      activeCustomerId: $activeCustomerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetUniqueId
        redirectUrl
        activeCustomerId
        activeProductId
        customerAcquiredAt
        customerLastFilledAt
        lastEventAt
        lastEventId
        customerFillCount
        filledAt
        returnedAt
        assetTypeId
        status
        vendorId
        assetEnvironmentImpactId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssetEventHistory = /* GraphQL */ `
  query GetAssetEventHistory($id: ID!) {
    getAssetEventHistory(id: $id) {
      id
      assetEventHistoryAssetId
      assetUniqueId
      eventType
      assetEventHistoryMetaDatas {
        nextToken
      }
      vendorId
      createdAt
      isValid
      updatedAt
      asset {
        id
        assetUniqueId
        redirectUrl
        activeCustomerId
        activeProductId
        customerAcquiredAt
        customerLastFilledAt
        lastEventAt
        lastEventId
        customerFillCount
        filledAt
        returnedAt
        assetTypeId
        status
        vendorId
        assetEnvironmentImpactId
        createdAt
        updatedAt
      }
    }
  }
`;
export const listAssetEventHistorys = /* GraphQL */ `
  query ListAssetEventHistorys(
    $filter: ModelassetEventHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssetEventHistorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetEventHistoryAssetId
        assetUniqueId
        eventType
        vendorId
        createdAt
        isValid
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByEventType = /* GraphQL */ `
  query AssetsByEventType(
    $eventType: String
    $sortDirection: ModelSortDirection
    $filter: ModelassetEventHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByEventType(
      eventType: $eventType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        assetEventHistoryAssetId
        assetUniqueId
        eventType
        vendorId
        createdAt
        isValid
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      name
      redirectUrl
      vendorLogo
      activeFrom
      activeTo
      address
      isArchived
      createdAt
      updatedAt
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelvendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        redirectUrl
        vendorLogo
        activeFrom
        activeTo
        address
        isArchived
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
