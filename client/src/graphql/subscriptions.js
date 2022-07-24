/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMasterAssetTypeKey = /* GraphQL */ `
  subscription OnCreateMasterAssetTypeKey {
    onCreateMasterAssetTypeKey {
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
export const onUpdateMasterAssetTypeKey = /* GraphQL */ `
  subscription OnUpdateMasterAssetTypeKey {
    onUpdateMasterAssetTypeKey {
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
export const onDeleteMasterAssetTypeKey = /* GraphQL */ `
  subscription OnDeleteMasterAssetTypeKey {
    onDeleteMasterAssetTypeKey {
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
export const onCreateAssetTypeMetaData = /* GraphQL */ `
  subscription OnCreateAssetTypeMetaData {
    onCreateAssetTypeMetaData {
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
export const onUpdateAssetTypeMetaData = /* GraphQL */ `
  subscription OnUpdateAssetTypeMetaData {
    onUpdateAssetTypeMetaData {
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
export const onDeleteAssetTypeMetaData = /* GraphQL */ `
  subscription OnDeleteAssetTypeMetaData {
    onDeleteAssetTypeMetaData {
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
export const onCreateMasterEventType = /* GraphQL */ `
  subscription OnCreateMasterEventType {
    onCreateMasterEventType {
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
export const onUpdateMasterEventType = /* GraphQL */ `
  subscription OnUpdateMasterEventType {
    onUpdateMasterEventType {
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
export const onDeleteMasterEventType = /* GraphQL */ `
  subscription OnDeleteMasterEventType {
    onDeleteMasterEventType {
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
export const onCreateMasterEventTypeAttribute = /* GraphQL */ `
  subscription OnCreateMasterEventTypeAttribute {
    onCreateMasterEventTypeAttribute {
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
export const onUpdateMasterEventTypeAttribute = /* GraphQL */ `
  subscription OnUpdateMasterEventTypeAttribute {
    onUpdateMasterEventTypeAttribute {
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
export const onDeleteMasterEventTypeAttribute = /* GraphQL */ `
  subscription OnDeleteMasterEventTypeAttribute {
    onDeleteMasterEventTypeAttribute {
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
export const onCreateAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  subscription OnCreateAssetTypeEventTypeAttributeMapping {
    onCreateAssetTypeEventTypeAttributeMapping {
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
export const onUpdateAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  subscription OnUpdateAssetTypeEventTypeAttributeMapping {
    onUpdateAssetTypeEventTypeAttributeMapping {
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
export const onDeleteAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  subscription OnDeleteAssetTypeEventTypeAttributeMapping {
    onDeleteAssetTypeEventTypeAttributeMapping {
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
export const onCreateAssetEventHistoryMetaData = /* GraphQL */ `
  subscription OnCreateAssetEventHistoryMetaData {
    onCreateAssetEventHistoryMetaData {
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
export const onUpdateAssetEventHistoryMetaData = /* GraphQL */ `
  subscription OnUpdateAssetEventHistoryMetaData {
    onUpdateAssetEventHistoryMetaData {
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
export const onDeleteAssetEventHistoryMetaData = /* GraphQL */ `
  subscription OnDeleteAssetEventHistoryMetaData {
    onDeleteAssetEventHistoryMetaData {
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
export const onCreateVendorLocation = /* GraphQL */ `
  subscription OnCreateVendorLocation {
    onCreateVendorLocation {
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
export const onUpdateVendorLocation = /* GraphQL */ `
  subscription OnUpdateVendorLocation {
    onUpdateVendorLocation {
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
export const onDeleteVendorLocation = /* GraphQL */ `
  subscription OnDeleteVendorLocation {
    onDeleteVendorLocation {
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
export const onCreateVendorEventAttribute = /* GraphQL */ `
  subscription OnCreateVendorEventAttribute {
    onCreateVendorEventAttribute {
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
export const onUpdateVendorEventAttribute = /* GraphQL */ `
  subscription OnUpdateVendorEventAttribute {
    onUpdateVendorEventAttribute {
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
export const onDeleteVendorEventAttribute = /* GraphQL */ `
  subscription OnDeleteVendorEventAttribute {
    onDeleteVendorEventAttribute {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const onCreateApiRegistry = /* GraphQL */ `
  subscription OnCreateApiRegistry {
    onCreateApiRegistry {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateApiRegistry = /* GraphQL */ `
  subscription OnUpdateApiRegistry {
    onUpdateApiRegistry {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteApiRegistry = /* GraphQL */ `
  subscription OnDeleteApiRegistry {
    onDeleteApiRegistry {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  subscription OnCreateAssetTypeEnvironmentImpactConfig {
    onCreateAssetTypeEnvironmentImpactConfig {
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
export const onUpdateAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  subscription OnUpdateAssetTypeEnvironmentImpactConfig {
    onUpdateAssetTypeEnvironmentImpactConfig {
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
export const onDeleteAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  subscription OnDeleteAssetTypeEnvironmentImpactConfig {
    onDeleteAssetTypeEnvironmentImpactConfig {
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
export const onCreateAssetEnvironmentImpact = /* GraphQL */ `
  subscription OnCreateAssetEnvironmentImpact {
    onCreateAssetEnvironmentImpact {
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
export const onUpdateAssetEnvironmentImpact = /* GraphQL */ `
  subscription OnUpdateAssetEnvironmentImpact {
    onUpdateAssetEnvironmentImpact {
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
export const onDeleteAssetEnvironmentImpact = /* GraphQL */ `
  subscription OnDeleteAssetEnvironmentImpact {
    onDeleteAssetEnvironmentImpact {
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
export const onCreateVendorEnvironmentImpact = /* GraphQL */ `
  subscription OnCreateVendorEnvironmentImpact {
    onCreateVendorEnvironmentImpact {
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
export const onUpdateVendorEnvironmentImpact = /* GraphQL */ `
  subscription OnUpdateVendorEnvironmentImpact {
    onUpdateVendorEnvironmentImpact {
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
export const onDeleteVendorEnvironmentImpact = /* GraphQL */ `
  subscription OnDeleteVendorEnvironmentImpact {
    onDeleteVendorEnvironmentImpact {
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
export const onCreateCustomerEnvironmentImpact = /* GraphQL */ `
  subscription OnCreateCustomerEnvironmentImpact {
    onCreateCustomerEnvironmentImpact {
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
export const onUpdateCustomerEnvironmentImpact = /* GraphQL */ `
  subscription OnUpdateCustomerEnvironmentImpact {
    onUpdateCustomerEnvironmentImpact {
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
export const onDeleteCustomerEnvironmentImpact = /* GraphQL */ `
  subscription OnDeleteCustomerEnvironmentImpact {
    onDeleteCustomerEnvironmentImpact {
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
export const onCreateAssetType = /* GraphQL */ `
  subscription OnCreateAssetType {
    onCreateAssetType {
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
export const onUpdateAssetType = /* GraphQL */ `
  subscription OnUpdateAssetType {
    onUpdateAssetType {
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
export const onDeleteAssetType = /* GraphQL */ `
  subscription OnDeleteAssetType {
    onDeleteAssetType {
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
export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset {
    onCreateAsset {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset {
    onUpdateAsset {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset {
    onDeleteAsset {
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
export const onCreateAssetEventHistory = /* GraphQL */ `
  subscription OnCreateAssetEventHistory {
    onCreateAssetEventHistory {
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
export const onUpdateAssetEventHistory = /* GraphQL */ `
  subscription OnUpdateAssetEventHistory {
    onUpdateAssetEventHistory {
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
export const onDeleteAssetEventHistory = /* GraphQL */ `
  subscription OnDeleteAssetEventHistory {
    onDeleteAssetEventHistory {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
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
