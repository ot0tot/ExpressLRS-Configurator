/*
  Device targets from https://github.com/ExpressLRS/ExpressLRS/tree/master/src/targets
*/
enum DeviceTarget {
  BETAFPV_900_TX_via_UART = 'BETAFPV_900_TX_via_UART',
  BETAFPV_900_TX_via_WIFI = 'BETAFPV_900_TX_via_WIFI',
  BETAFPV_900_RX_via_UART = 'BETAFPV_900_RX_via_UART',
  BETAFPV_900_RX_via_WIFI = 'BETAFPV_900_RX_via_WIFI',
  BETAFPV_900_RX_via_BetaflightPassthrough = 'BETAFPV_900_RX_via_BetaflightPassthrough',
  BETAFPV_2400_TX_via_UART = 'BETAFPV_2400_TX_via_UART',
  BETAFPV_2400_TX_via_WIFI = 'BETAFPV_2400_TX_via_WIFI',
  BETAFPV_2400_RX_via_UART = 'BETAFPV_2400_RX_via_UART',
  BETAFPV_2400_RX_via_WIFI = 'BETAFPV_2400_RX_via_WIFI',
  BETAFPV_2400_RX_via_BetaflightPassthrough = 'BETAFPV_2400_RX_via_BetaflightPassthrough',
  Frsky_TX_R9M_via_STLINK = 'Frsky_TX_R9M_via_STLINK',
  Frsky_TX_R9M_via_stock_BL = 'Frsky_TX_R9M_via_stock_BL',
  Frsky_TX_R9M_via_WIFI = 'Frsky_TX_R9M_via_WIFI',
  Frsky_TX_R9M_LITE_via_STLINK = 'Frsky_TX_R9M_LITE_via_STLINK',
  Frsky_TX_R9M_LITE_via_stock_BL = 'Frsky_TX_R9M_LITE_via_stock_BL',
  Frsky_TX_R9M_LITE_PRO_via_STLINK = 'Frsky_TX_R9M_LITE_PRO_via_STLINK',
  Frsky_RX_R9MM_R9MINI_via_STLINK = 'Frsky_RX_R9MM_R9MINI_via_STLINK',
  Frsky_RX_R9MM_R9MINI_via_BetaflightPassthrough = 'Frsky_RX_R9MM_R9MINI_via_BetaflightPassthrough',
  Frsky_RX_R9SLIMPLUS_via_STLINK = 'Frsky_RX_R9SLIMPLUS_via_STLINK',
  Frsky_RX_R9SLIMPLUS_via_BetaflightPassthrough = 'Frsky_RX_R9SLIMPLUS_via_BetaflightPassthrough',
  Frsky_RX_R9SLIM_via_STLINK = 'Frsky_RX_R9SLIM_via_STLINK',
  Frsky_RX_R9SLIM_via_BetaflightPassthrough = 'Frsky_RX_R9SLIM_via_BetaflightPassthrough',
  Frsky_RX_R9SLIMPLUS_OTA_via_STLINK = 'Frsky_RX_R9SLIMPLUS_OTA_via_STLINK',
  Frsky_RX_R9SLIMPLUS_OTA_via_BetaflightPassthrough = 'Frsky_RX_R9SLIMPLUS_OTA_via_BetaflightPassthrough',
  Frsky_RX_R9MX_via_STLINK = 'Frsky_RX_R9MX_via_STLINK',
  Frsky_RX_R9MX_via_BetaflightPassthrough = 'Frsky_RX_R9MX_via_BetaflightPassthrough',
  Jumper_RX_R900MINI_via_STLINK = 'Jumper_RX_R900MINI_via_STLINK',
  Jumper_RX_R900MINI_via_BetaflightPassthrough = 'Jumper_RX_R900MINI_via_BetaflightPassthrough',
  HappyModel_ES24TX_2400_TX_via_UART = 'HappyModel_ES24TX_2400_TX_via_UART',
  HappyModel_ES24TX_2400_TX_via_WIFI = 'HappyModel_ES24TX_2400_TX_via_WIFI',
  HappyModel_ES24TX_Slim_Pro_2400_TX_via_UART = 'HappyModel_ES24TX_Slim_Pro_2400_TX_via_UART',
  HappyModel_ES24TX_Slim_Pro_2400_TX_via_WIFI = 'HappyModel_ES24TX_Slim_Pro_2400_TX_via_WIFI',
  HappyModel_TX_ES900TX_via_UART = 'HappyModel_TX_ES900TX_via_UART',
  HappyModel_TX_ES900TX_via_WIFI = 'HappyModel_TX_ES900TX_via_WIFI',
  HappyModel_RX_ES900RX_via_BetaflightPassthrough = 'HappyModel_RX_ES900RX_via_BetaflightPassthrough',
  HappyModel_RX_ES900RX_via_WIFI = 'HappyModel_RX_ES900RX_via_WIFI',
  HappyModel_EP_2400_RX_via_UART = 'HappyModel_EP_2400_RX_via_UART',
  HappyModel_EP_2400_RX_via_BetaflightPassthrough = 'HappyModel_EP_2400_RX_via_BetaflightPassthrough',
  HappyModel_EP_2400_RX_via_WIFI = 'HappyModel_EP_2400_RX_via_WIFI',
  HappyModel_PP_2400_RX_via_STLINK = 'HappyModel_PP_2400_RX_via_STLINK',
  HappyModel_PP_2400_RX_via_BetaflightPassthrough = 'HappyModel_PP_2400_RX_via_BetaflightPassthrough',
  HappyModel_TX_ES915TX_via_STLINK = 'HappyModel_TX_ES915TX_via_STLINK',
  HappyModel_TX_ES915TX_via_WIFI = 'HappyModel_TX_ES915TX_via_WIFI',
  HappyModel_TX_ES915TX_via_stock_BL = 'HappyModel_TX_ES915TX_via_stock_BL',
  HappyModel_RX_ES915RX_via_STLINK = 'HappyModel_RX_ES915RX_via_STLINK',
  HappyModel_RX_ES915RX_via_BetaflightPassthrough = 'HappyModel_RX_ES915RX_via_BetaflightPassthrough',
  DIY_900_TX_TTGO_V1_SX127x_via_UART = 'DIY_900_TX_TTGO_V1_SX127x_via_UART',
  DIY_900_TX_TTGO_V2_SX127x_via_UART = 'DIY_900_TX_TTGO_V2_SX127x_via_UART',
  DIY_900_TX_ESP32_SX127x_E19_via_UART = 'DIY_900_TX_ESP32_SX127x_E19_via_UART',
  DIY_900_TX_ESP32_SX127x_RFM95_via_UART = 'DIY_900_TX_ESP32_SX127x_RFM95_via_UART',
  DIY_900_RX_ESP8285_SX127x_via_UART = 'DIY_900_RX_ESP8285_SX127x_via_UART',
  DIY_900_RX_ESP8285_SX127x_via_BetaflightPassthrough = 'DIY_900_RX_ESP8285_SX127x_via_BetaflightPassthrough',
  DIY_2400_TX_ESP32_SX1280_Mini_via_UART = 'DIY_2400_TX_ESP32_SX1280_Mini_via_UART',
  DIY_2400_TX_ESP32_SX1280_E28_via_UART = 'DIY_2400_TX_ESP32_SX1280_E28_via_UART',
  DIY_2400_TX_ESP32_SX1280_E28_via_WIFI = 'DIY_2400_TX_ESP32_SX1280_E28_via_WIFI',
  DIY_2400_TX_ESP32_SX1280_LORA1280F27_via_UART = 'DIY_2400_TX_ESP32_SX1280_LORA1280F27_via_UART',
  GHOST_2400_TX_via_STLINK = 'GHOST_2400_TX_via_STLINK',
  GHOST_2400_TX_LITE_via_STLINK = 'GHOST_2400_TX_LITE_via_STLINK',
  GHOST_ATTO_2400_RX_via_STLINK = 'GHOST_ATTO_2400_RX_via_STLINK',
  GHOST_ATTO_2400_RX_via_BetaflightPassthrough = 'GHOST_ATTO_2400_RX_via_BetaflightPassthrough',
  DIY_2400_RX_ESP8285_SX1280_via_UART = 'DIY_2400_RX_ESP8285_SX1280_via_UART',
  DIY_2400_RX_ESP8285_SX1280_via_WIFI = 'DIY_2400_RX_ESP8285_SX1280_via_WIFI',
  DIY_2400_RX_ESP8285_SX1280_via_BetaflightPassthrough = 'DIY_2400_RX_ESP8285_SX1280_via_BetaflightPassthrough',
  DIY_2400_RX_STM32_CCG_Nano_v0_5_via_STLINK = 'DIY_2400_RX_STM32_CCG_Nano_v0_5_via_STLINK',
  DIY_2400_RX_STM32_CCG_Nano_v0_5_via_BetaflightPassthrough = 'DIY_2400_RX_STM32_CCG_Nano_v0_5_via_BetaflightPassthrough',
  NamimnoRC_VOYAGER_900_TX_via_STLINK = 'NamimnoRC_VOYAGER_900_TX_via_STLINK',
  NamimnoRC_VOYAGER_900_TX_via_WIFI = 'NamimnoRC_VOYAGER_900_TX_via_WIFI',
  NamimnoRC_VOYAGER_900_RX_via_STLINK = 'NamimnoRC_VOYAGER_900_RX_via_STLINK',
  NamimnoRC_VOYAGER_900_RX_via_BetaflightPassthrough = 'NamimnoRC_VOYAGER_900_RX_via_BetaflightPassthrough',
  NamimnoRC_VOYAGER_900_ESP_RX_via_UART = 'NamimnoRC_VOYAGER_900_ESP_RX_via_UART',
  NamimnoRC_VOYAGER_900_ESP_RX_via_BetaflightPassthrough = 'NamimnoRC_VOYAGER_900_ESP_RX_via_BetaflightPassthrough',
  NamimnoRC_VOYAGER_900_ESP_RX_via_WIFI = 'NamimnoRC_VOYAGER_900_ESP_RX_via_WIFI',
  NamimnoRC_FLASH_2400_TX_via_STLINK = 'NamimnoRC_FLASH_2400_TX_via_STLINK',
  NamimnoRC_FLASH_2400_TX_via_WIFI = 'NamimnoRC_FLASH_2400_TX_via_WIFI',
  NamimnoRC_FLASH_2400_RX_via_STLINK = 'NamimnoRC_FLASH_2400_RX_via_STLINK',
  NamimnoRC_FLASH_2400_RX_via_BetaflightPassthrough = 'NamimnoRC_FLASH_2400_RX_via_BetaflightPassthrough',
  NamimnoRC_FLASH_2400_ESP_RX_via_UART = 'NamimnoRC_FLASH_2400_ESP_RX_via_UART',
  NamimnoRC_FLASH_2400_ESP_RX_via_BetaflightPassthrough = 'NamimnoRC_FLASH_2400_ESP_RX_via_BetaflightPassthrough',
  NamimnoRC_FLASH_2400_ESP_RX_via_WIFI = 'NamimnoRC_FLASH_2400_ESP_RX_via_WIFI',
  FM30_TX_via_STLINK = 'FM30_TX_via_STLINK',
  FM30_TX_via_DFU = 'FM30_TX_via_DFU',
  FM30_RX_MINI_via_STLINK = 'FM30_RX_MINI_via_STLINK',
  FM30_RX_MINI_via_BetaflightPassthrough = 'FM30_RX_MINI_via_BetaflightPassthrough',
  NeutronRC_900_RX_via_UART = 'NeutronRC_900_RX_via_UART',
  NeutronRC_900_RX_via_BetaflightPassthrough = 'NeutronRC_900_RX_via_BetaflightPassthrough',
  NeutronRC_900_RX_via_WIFI = 'NeutronRC_900_RX_via_WIFI',
  HGLRC_Hermes_2400_TX_via_UART = 'HGLRC_Hermes_2400_TX_via_UART',
  HGLRC_Hermes_2400_TX_via_WIFI = 'HGLRC_Hermes_2400_TX_via_WIFI',
  HGLRC_Hermes_2400_RX_via_UART = 'HGLRC_Hermes_2400_RX_via_UART',
  HGLRC_Hermes_2400_RX_via_BetaflightPassthrough = 'HGLRC_Hermes_2400_RX_via_BetaflightPassthrough',
  HGLRC_Hermes_2400_RX_via_WIFI = 'HGLRC_Hermes_2400_RX_via_WIFI',
  HGLRC_Hermes_900_RX_via_UART = 'HGLRC_Hermes_900_RX_via_UART',
  HGLRC_Hermes_900_RX_via_BetaflightPassthrough = 'HGLRC_Hermes_900_RX_via_BetaflightPassthrough',
  HGLRC_Hermes_900_RX_via_WIFI = 'HGLRC_Hermes_900_RX_via_WIFI',
}

export default DeviceTarget;
