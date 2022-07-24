/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchAddAssets = /* GraphQL */ `
  mutation BatchAddAssets($assets: [CreateAssetInput]) {
    batchAddAssets(assets: $assets) {
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
export const createAssetType = /* GraphQL */ `
  mutation CreateAssetType(
    $input: CreateAssetTypeInput!
    $condition: ModelassetTypeConditionInput
  ) {
    createAssetType(input: $input, condition: $condition) {
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
export const updateAssetType = /* GraphQL */ `
  mutation UpdateAssetType(
    $input: UpdateAssetTypeInput!
    $condition: ModelassetTypeConditionInput
  ) {
    updateAssetType(input: $input, condition: $condition) {
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
export const deleteAssetType = /* GraphQL */ `
  mutation DeleteAssetType(
    $input: DeleteAssetTypeInput!
    $condition: ModelassetTypeConditionInput
  ) {
    deleteAssetType(input: $input, condition: $condition) {
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
export const createMasterAssetTypeKey = /* GraphQL */ `
  mutation CreateMasterAssetTypeKey(
    $input: CreateMasterAssetTypeKeyInput!
    $condition: ModelmasterAssetTypeKeyConditionInput
  ) {
    createMasterAssetTypeKey(input: $input, condition: $condition) {
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
export const updateMasterAssetTypeKey = /* GraphQL */ `
  mutation UpdateMasterAssetTypeKey(
    $input: UpdateMasterAssetTypeKeyInput!
    $condition: ModelmasterAssetTypeKeyConditionInput
  ) {
    updateMasterAssetTypeKey(input: $input, condition: $condition) {
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
export const deleteMasterAssetTypeKey = /* GraphQL */ `
  mutation DeleteMasterAssetTypeKey(
    $input: DeleteMasterAssetTypeKeyInput!
    $condition: ModelmasterAssetTypeKeyConditionInput
  ) {
    deleteMasterAssetTypeKey(input: $input, condition: $condition) {
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
export const createAssetTypeMetaData = /* GraphQL */ `
  mutation CreateAssetTypeMetaData(
    $input: CreateAssetTypeMetaDataInput!
    $condition: ModelassetTypeMetaDataConditionInput
  ) {
    createAssetTypeMetaData(input: $input, condition: $condition) {
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
export const updateAssetTypeMetaData = /* GraphQL */ `
  mutation UpdateAssetTypeMetaData(
    $input: UpdateAssetTypeMetaDataInput!
    $condition: ModelassetTypeMetaDataConditionInput
  ) {
    updateAssetTypeMetaData(input: $input, condition: $condition) {
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
export const deleteAssetTypeMetaData = /* GraphQL */ `
  mutation DeleteAssetTypeMetaData(
    $input: DeleteAssetTypeMetaDataInput!
    $condition: ModelassetTypeMetaDataConditionInput
  ) {
    deleteAssetTypeMetaData(input: $input, condition: $condition) {
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
export const createMasterEventType = /* GraphQL */ `
  mutation CreateMasterEventType(
    $input: CreateMasterEventTypeInput!
    $condition: ModelmasterEventTypeConditionInput
  ) {
    createMasterEventType(input: $input, condition: $condition) {
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
export const updateMasterEventType = /* GraphQL */ `
  mutation UpdateMasterEventType(
    $input: UpdateMasterEventTypeInput!
    $condition: ModelmasterEventTypeConditionInput
  ) {
    updateMasterEventType(input: $input, condition: $condition) {
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
export const deleteMasterEventType = /* GraphQL */ `
  mutation DeleteMasterEventType(
    $input: DeleteMasterEventTypeInput!
    $condition: ModelmasterEventTypeConditionInput
  ) {
    deleteMasterEventType(input: $input, condition: $condition) {
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
export const createMasterEventTypeAttribute = /* GraphQL */ `
  mutation CreateMasterEventTypeAttribute(
    $input: CreateMasterEventTypeAttributeInput!
    $condition: ModelmasterEventTypeAttributeConditionInput
  ) {
    createMasterEventTypeAttribute(input: $input, condition: $condition) {
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
export const updateMasterEventTypeAttribute = /* GraphQL */ `
  mutation UpdateMasterEventTypeAttribute(
    $input: UpdateMasterEventTypeAttributeInput!
    $condition: ModelmasterEventTypeAttributeConditionInput
  ) {
    updateMasterEventTypeAttribute(input: $input, condition: $condition) {
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
export const deleteMasterEventTypeAttribute = /* GraphQL */ `
  mutation DeleteMasterEventTypeAttribute(
    $input: DeleteMasterEventTypeAttributeInput!
    $condition: ModelmasterEventTypeAttributeConditionInput
  ) {
    deleteMasterEventTypeAttribute(input: $input, condition: $condition) {
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
export const createAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  mutation CreateAssetTypeEventTypeAttributeMapping(
    $input: CreateAssetTypeEventTypeAttributeMappingInput!
    $condition: ModelassetTypeEventTypeAttributeMappingConditionInput
  ) {
    createAssetTypeEventTypeAttributeMapping(
      input: $input
      condition: $condition
    ) {
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
export const updateAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  mutation UpdateAssetTypeEventTypeAttributeMapping(
    $input: UpdateAssetTypeEventTypeAttributeMappingInput!
    $condition: ModelassetTypeEventTypeAttributeMappingConditionInput
  ) {
    updateAssetTypeEventTypeAttributeMapping(
      input: $input
      condition: $condition
    ) {
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
export const deleteAssetTypeEventTypeAttributeMapping = /* GraphQL */ `
  mutation DeleteAssetTypeEventTypeAttributeMapping(
    $input: DeleteAssetTypeEventTypeAttributeMappingInput!
    $condition: ModelassetTypeEventTypeAttributeMappingConditionInput
  ) {
    deleteAssetTypeEventTypeAttributeMapping(
      input: $input
      condition: $condition
    ) {
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
export const createAssetEventHistoryMetaData = /* GraphQL */ `
  mutation CreateAssetEventHistoryMetaData(
    $input: CreateAssetEventHistoryMetaDataInput!
    $condition: ModelassetEventHistoryMetaDataConditionInput
  ) {
    createAssetEventHistoryMetaData(input: $input, condition: $condition) {
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
export const updateAssetEventHistoryMetaData = /* GraphQL */ `
  mutation UpdateAssetEventHistoryMetaData(
    $input: UpdateAssetEventHistoryMetaDataInput!
    $condition: ModelassetEventHistoryMetaDataConditionInput
  ) {
    updateAssetEventHistoryMetaData(input: $input, condition: $condition) {
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
export const deleteAssetEventHistoryMetaData = /* GraphQL */ `
  mutation DeleteAssetEventHistoryMetaData(
    $input: DeleteAssetEventHistoryMetaDataInput!
    $condition: ModelassetEventHistoryMetaDataConditionInput
  ) {
    deleteAssetEventHistoryMetaData(input: $input, condition: $condition) {
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelvendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelvendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelvendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createVendorLocation = /* GraphQL */ `
  mutation CreateVendorLocation(
    $input: CreateVendorLocationInput!
    $condition: ModelvendorLocationConditionInput
  ) {
    createVendorLocation(input: $input, condition: $condition) {
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
export const updateVendorLocation = /* GraphQL */ `
  mutation UpdateVendorLocation(
    $input: UpdateVendorLocationInput!
    $condition: ModelvendorLocationConditionInput
  ) {
    updateVendorLocation(input: $input, condition: $condition) {
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
export const deleteVendorLocation = /* GraphQL */ `
  mutation DeleteVendorLocation(
    $input: DeleteVendorLocationInput!
    $condition: ModelvendorLocationConditionInput
  ) {
    deleteVendorLocation(input: $input, condition: $condition) {
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
export const createVendorEventAttribute = /* GraphQL */ `
  mutation CreateVendorEventAttribute(
    $input: CreateVendorEventAttributeInput!
    $condition: ModelvendorEventAttributeConditionInput
  ) {
    createVendorEventAttribute(input: $input, condition: $condition) {
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
export const updateVendorEventAttribute = /* GraphQL */ `
  mutation UpdateVendorEventAttribute(
    $input: UpdateVendorEventAttributeInput!
    $condition: ModelvendorEventAttributeConditionInput
  ) {
    updateVendorEventAttribute(input: $input, condition: $condition) {
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
export const deleteVendorEventAttribute = /* GraphQL */ `
  mutation DeleteVendorEventAttribute(
    $input: DeleteVendorEventAttributeInput!
    $condition: ModelvendorEventAttributeConditionInput
  ) {
    deleteVendorEventAttribute(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModeluserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModeluserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModeluserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const createApiRegistry = /* GraphQL */ `
  mutation CreateApiRegistry(
    $input: CreateApiRegistryInput!
    $condition: ModelapiRegistryConditionInput
  ) {
    createApiRegistry(input: $input, condition: $condition) {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const updateApiRegistry = /* GraphQL */ `
  mutation UpdateApiRegistry(
    $input: UpdateApiRegistryInput!
    $condition: ModelapiRegistryConditionInput
  ) {
    updateApiRegistry(input: $input, condition: $condition) {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const deleteApiRegistry = /* GraphQL */ `
  mutation DeleteApiRegistry(
    $input: DeleteApiRegistryInput!
    $condition: ModelapiRegistryConditionInput
  ) {
    deleteApiRegistry(input: $input, condition: $condition) {
      id
      apiType
      url
      apiKey
      createdAt
      updatedAt
    }
  }
`;
export const createAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  mutation CreateAssetTypeEnvironmentImpactConfig(
    $input: CreateAssetTypeEnvironmentImpactConfigInput!
    $condition: ModelassetTypeEnvironmentImpactConfigConditionInput
  ) {
    createAssetTypeEnvironmentImpactConfig(
      input: $input
      condition: $condition
    ) {
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
export const updateAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  mutation UpdateAssetTypeEnvironmentImpactConfig(
    $input: UpdateAssetTypeEnvironmentImpactConfigInput!
    $condition: ModelassetTypeEnvironmentImpactConfigConditionInput
  ) {
    updateAssetTypeEnvironmentImpactConfig(
      input: $input
      condition: $condition
    ) {
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
export const deleteAssetTypeEnvironmentImpactConfig = /* GraphQL */ `
  mutation DeleteAssetTypeEnvironmentImpactConfig(
    $input: DeleteAssetTypeEnvironmentImpactConfigInput!
    $condition: ModelassetTypeEnvironmentImpactConfigConditionInput
  ) {
    deleteAssetTypeEnvironmentImpactConfig(
      input: $input
      condition: $condition
    ) {
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
export const createAssetEnvironmentImpact = /* GraphQL */ `
  mutation CreateAssetEnvironmentImpact(
    $input: CreateAssetEnvironmentImpactInput!
    $condition: ModelassetEnvironmentImpactConditionInput
  ) {
    createAssetEnvironmentImpact(input: $input, condition: $condition) {
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
export const updateAssetEnvironmentImpact = /* GraphQL */ `
  mutation UpdateAssetEnvironmentImpact(
    $input: UpdateAssetEnvironmentImpactInput!
    $condition: ModelassetEnvironmentImpactConditionInput
  ) {
    updateAssetEnvironmentImpact(input: $input, condition: $condition) {
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
export const deleteAssetEnvironmentImpact = /* GraphQL */ `
  mutation DeleteAssetEnvironmentImpact(
    $input: DeleteAssetEnvironmentImpactInput!
    $condition: ModelassetEnvironmentImpactConditionInput
  ) {
    deleteAssetEnvironmentImpact(input: $input, condition: $condition) {
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
export const createVendorEnvironmentImpact = /* GraphQL */ `
  mutation CreateVendorEnvironmentImpact(
    $input: CreateVendorEnvironmentImpactInput!
    $condition: ModelvendorEnvironmentImpactConditionInput
  ) {
    createVendorEnvironmentImpact(input: $input, condition: $condition) {
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
export const updateVendorEnvironmentImpact = /* GraphQL */ `
  mutation UpdateVendorEnvironmentImpact(
    $input: UpdateVendorEnvironmentImpactInput!
    $condition: ModelvendorEnvironmentImpactConditionInput
  ) {
    updateVendorEnvironmentImpact(input: $input, condition: $condition) {
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
export const deleteVendorEnvironmentImpact = /* GraphQL */ `
  mutation DeleteVendorEnvironmentImpact(
    $input: DeleteVendorEnvironmentImpactInput!
    $condition: ModelvendorEnvironmentImpactConditionInput
  ) {
    deleteVendorEnvironmentImpact(input: $input, condition: $condition) {
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
export const createCustomerEnvironmentImpact = /* GraphQL */ `
  mutation CreateCustomerEnvironmentImpact(
    $input: CreateCustomerEnvironmentImpactInput!
    $condition: ModelcustomerEnvironmentImpactConditionInput
  ) {
    createCustomerEnvironmentImpact(input: $input, condition: $condition) {
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
export const updateCustomerEnvironmentImpact = /* GraphQL */ `
  mutation UpdateCustomerEnvironmentImpact(
    $input: UpdateCustomerEnvironmentImpactInput!
    $condition: ModelcustomerEnvironmentImpactConditionInput
  ) {
    updateCustomerEnvironmentImpact(input: $input, condition: $condition) {
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
export const deleteCustomerEnvironmentImpact = /* GraphQL */ `
  mutation DeleteCustomerEnvironmentImpact(
    $input: DeleteCustomerEnvironmentImpactInput!
    $condition: ModelcustomerEnvironmentImpactConditionInput
  ) {
    deleteCustomerEnvironmentImpact(input: $input, condition: $condition) {
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
export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelassetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelassetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelassetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
export const createAssetEventHistory = /* GraphQL */ `
  mutation CreateAssetEventHistory(
    $input: CreateAssetEventHistoryInput!
    $condition: ModelassetEventHistoryConditionInput
  ) {
    createAssetEventHistory(input: $input, condition: $condition) {
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
export const updateAssetEventHistory = /* GraphQL */ `
  mutation UpdateAssetEventHistory(
    $input: UpdateAssetEventHistoryInput!
    $condition: ModelassetEventHistoryConditionInput
  ) {
    updateAssetEventHistory(input: $input, condition: $condition) {
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
export const deleteAssetEventHistory = /* GraphQL */ `
  mutation DeleteAssetEventHistory(
    $input: DeleteAssetEventHistoryInput!
    $condition: ModelassetEventHistoryConditionInput
  ) {
    deleteAssetEventHistory(input: $input, condition: $condition) {
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
