function extractResultBW(jsonString) {
  try {
    // 解析 JSON 字符串
    const result = JSON.parse(jsonString);

    // 提取 images 数组，并过滤掉不以 adv 或 orig 开头的项
    const images = (result.images || []).filter(img =>
      img.fileName.startsWith('adv_') || img.fileName.startsWith('orig_')
    );

    // 从 log 中提取准确率和攻击成功率
    const log = result.log || '';
    const originalAccuracyMatch = log.match(/Original Accuracy: (\d+\.\d+)%/);
    const attackSuccessRateMatch = log.match(/Attack Success Rate: (\d+\.\d+)%/);

    const originalAccuracy = originalAccuracyMatch ? Number.parseFloat(originalAccuracyMatch[1]) : null;
    const attackSuccessRate = attackSuccessRateMatch ? Number.parseFloat(attackSuccessRateMatch[1]) : null;

    return {
      images,
      originalAccuracy,
      attackSuccessRate
    };
  } catch (error) {
    console.error('解析 JSON 失败:', error);
    return {
      images: [],
      originalAccuracy: null,
      attackSuccessRate: null
    };
  }
}

function extractResultBWCalc(result) {
  // 保持原有的准确率和攻击成功率
  const { originalAccuracy, attackSuccessRate, images } = result;

  // 计算 adv 开头的文件数量
  const advSum = images.filter(img => img.fileName.startsWith('adv_')).length;

  // 创建用于存储匹配结果的 Map
  const imageMap = new Map();

  // 遍历所有图片，按 id 分组
  for (const img of images) {
    const fileName = img.fileName;
    const parts = fileName.split('_');
    const id = parts[parts.length - 1].split('.')[0];

    if (!imageMap.has(id)) {
      imageMap.set(id, {});
    }

    const entry = imageMap.get(id);
    if (fileName.startsWith('orig_')) {
      entry.origFileName = fileName;
      entry.origFetchUrl = img.fetchUrl;
      entry.origClass = parts[1];
      entry.origClassProbability = Number.parseFloat(parts[2]);
    } else if (fileName.startsWith('adv_')) {
      entry.advFileName = fileName;
      entry.advFetchUrl = img.fetchUrl;
      entry.afterClass = parts[1];
      entry.afterClassProbability = Number.parseFloat(parts[2]);
    }
  }

  // 将 Map 转换为数组，并添加序号
  const imageList = Array.from(imageMap.entries()).map(([id, data], index) => ({
    id: index + 1,
    ...data
  }));

  return {
    originalAccuracy,
    attackSuccessRate,
    advSum,
    imageList
  };
}


// 示例字符串
// const detailInfo = {
//   "id": 88,
//   "createBy": 1,
//   "modelId": 25,
//   "modelName": "BSimpleNN",
//   "datasetId": 40,
//   "datasetName": "aw",
//   "modelDatasetId": 43,
//   "startAt": 1744363554107,
//   "totalTime": 34437,
//   "state": 2,
//   "result": "{\"images\":[{\"fetchUrl\":\"/aiFile/88/adv_2_2_0.94_0.jpg\",\"fileName\":\"adv_2_2_0.94_0.jpg\",\"hash\":\"8cb1c41e84e2bb4967004b957df9b647062adea9\",\"id\":551,\"size\":863,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_7_7_0.93_27.jpg\",\"fileName\":\"orig_7_7_0.93_27.jpg\",\"hash\":\"4fca5608994e64fc63b8075cd28020be347b5521\",\"id\":552,\"size\":873,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_5_8_0.29_2.jpg\",\"fileName\":\"adv_5_8_0.29_2.jpg\",\"hash\":\"13c5f264292beafe14e0fa5faa5e397f1d033b7e\",\"id\":553,\"size\":921,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_2_2_0.94_0.jpg\",\"fileName\":\"orig_2_2_0.94_0.jpg\",\"hash\":\"8cb1c41e84e2bb4967004b957df9b647062adea9\",\"id\":554,\"size\":863,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_1_1_0.94_15.jpg\",\"fileName\":\"adv_1_1_0.94_15.jpg\",\"hash\":\"f2badf76cb26ed381b71d165066ddf392bd8a0f6\",\"id\":555,\"size\":807,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_8_8_1.00_4.jpg\",\"fileName\":\"adv_8_8_1.00_4.jpg\",\"hash\":\"ee16fee4004fdb14e25b45966f438a63e37c7817\",\"id\":556,\"size\":920,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_9_9_0.92_5.jpg\",\"fileName\":\"orig_9_9_0.92_5.jpg\",\"hash\":\"0424f27f13623909bf7700b08fe3317944b8dedb\",\"id\":557,\"size\":890,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_9_9_0.92_5.jpg\",\"fileName\":\"adv_9_9_0.92_5.jpg\",\"hash\":\"0424f27f13623909bf7700b08fe3317944b8dedb\",\"id\":558,\"size\":890,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_9_9_0.92_23.jpg\",\"fileName\":\"adv_9_9_0.92_23.jpg\",\"hash\":\"7422e2a37e62ae64472f34ba0869dbf54d49af91\",\"id\":559,\"size\":884,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_1_1_0.98_24.jpg\",\"fileName\":\"adv_1_1_0.98_24.jpg\",\"hash\":\"cc961f603170943d28f72ad76c29df07d0a0a47e\",\"id\":560,\"size\":788,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_2_2_0.86_1.jpg\",\"fileName\":\"orig_2_2_0.86_1.jpg\",\"hash\":\"1d219d6b305acb1acd35bbff42479337845f36be\",\"id\":561,\"size\":866,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_0_0_0.99_12.jpg\",\"fileName\":\"orig_0_0_0.99_12.jpg\",\"hash\":\"29e64be4384552e05cb696f89e7c62b311507fa5\",\"id\":562,\"size\":901,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_1_1_0.94_15.jpg\",\"fileName\":\"orig_1_1_0.94_15.jpg\",\"hash\":\"f2badf76cb26ed381b71d165066ddf392bd8a0f6\",\"id\":563,\"size\":807,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_5_5_0.96_14.jpg\",\"fileName\":\"adv_5_5_0.96_14.jpg\",\"hash\":\"ce7d85880b58733395ab08fb9ad16fd76c6febeb\",\"id\":564,\"size\":856,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_1_1_0.98_13.jpg\",\"fileName\":\"adv_1_1_0.98_13.jpg\",\"hash\":\"65d9d11003ec668f9e119b2ea43c1fed07d32d4f\",\"id\":565,\"size\":779,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_2_2_0.92_28.jpg\",\"fileName\":\"adv_2_2_0.92_28.jpg\",\"hash\":\"f54e297e49a8c20bbe981d07207ab98ce6c2c3f5\",\"id\":566,\"size\":903,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_4_4_1.00_18.jpg\",\"fileName\":\"orig_4_4_1.00_18.jpg\",\"hash\":\"826a3f6bc01fe1be9fc1fae912e7e8cdbb3d61dc\",\"id\":567,\"size\":862,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_1_1_0.90_17.jpg\",\"fileName\":\"adv_1_1_0.90_17.jpg\",\"hash\":\"7fa45228d5c23bef8a7e55a3f5d3e3390c351703\",\"id\":568,\"size\":780,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_1_1_0.90_17.jpg\",\"fileName\":\"orig_1_1_0.90_17.jpg\",\"hash\":\"7fa45228d5c23bef8a7e55a3f5d3e3390c351703\",\"id\":569,\"size\":780,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_0_0_1.00_22.jpg\",\"fileName\":\"orig_0_0_1.00_22.jpg\",\"hash\":\"8feabde387490bb7d3c8fe99d421d3d8d307b043\",\"id\":570,\"size\":893,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_6_8_0.25_16.jpg\",\"fileName\":\"adv_6_8_0.25_16.jpg\",\"hash\":\"81316f3a8ee92aac09c9acdd5cca9e750e7feec4\",\"id\":571,\"size\":818,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_2_2_0.92_28.jpg\",\"fileName\":\"orig_2_2_0.92_28.jpg\",\"hash\":\"f54e297e49a8c20bbe981d07207ab98ce6c2c3f5\",\"id\":572,\"size\":903,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_3_3_0.98_7.jpg\",\"fileName\":\"adv_3_3_0.98_7.jpg\",\"hash\":\"40c0de1ef93e0b61b6c042a67912d52e731a6a1b\",\"id\":573,\"size\":845,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_4_4_1.00_18.jpg\",\"fileName\":\"adv_4_4_1.00_18.jpg\",\"hash\":\"826a3f6bc01fe1be9fc1fae912e7e8cdbb3d61dc\",\"id\":574,\"size\":862,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_5_5_0.58_2.jpg\",\"fileName\":\"orig_5_5_0.58_2.jpg\",\"hash\":\"5aea3879e18572a9dd49424a0b53393e10a46de9\",\"id\":575,\"size\":875,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_1_1_0.98_24.jpg\",\"fileName\":\"orig_1_1_0.98_24.jpg\",\"hash\":\"cc961f603170943d28f72ad76c29df07d0a0a47e\",\"id\":576,\"size\":788,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_2_2_0.86_1.jpg\",\"fileName\":\"adv_2_2_0.86_1.jpg\",\"hash\":\"1d219d6b305acb1acd35bbff42479337845f36be\",\"id\":577,\"size\":866,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_9_9_0.87_8.jpg\",\"fileName\":\"orig_9_9_0.87_8.jpg\",\"hash\":\"aa4e3e4ce978ecd03bffa6b8067a957a225b13d6\",\"id\":578,\"size\":833,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_7_7_0.93_27.jpg\",\"fileName\":\"adv_7_7_0.93_27.jpg\",\"hash\":\"4fca5608994e64fc63b8075cd28020be347b5521\",\"id\":579,\"size\":873,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_8_8_1.00_21.jpg\",\"fileName\":\"adv_8_8_1.00_21.jpg\",\"hash\":\"659fc7140f711e4b8ee9909782d6f3595bc9ec24\",\"id\":580,\"size\":872,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_1_1_0.81_3.jpg\",\"fileName\":\"orig_1_1_0.81_3.jpg\",\"hash\":\"183863c6654381ff7f75740cfc98a8dd80c370e1\",\"id\":581,\"size\":787,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_9_9_0.92_23.jpg\",\"fileName\":\"orig_9_9_0.92_23.jpg\",\"hash\":\"7422e2a37e62ae64472f34ba0869dbf54d49af91\",\"id\":582,\"size\":884,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_2_2_0.98_29.jpg\",\"fileName\":\"orig_2_2_0.98_29.jpg\",\"hash\":\"ccda0d81687f46c5c9ccbd219ce8fbd0073a71f9\",\"id\":583,\"size\":838,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_8_8_1.00_4.jpg\",\"fileName\":\"orig_8_8_1.00_4.jpg\",\"hash\":\"ee16fee4004fdb14e25b45966f438a63e37c7817\",\"id\":584,\"size\":920,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_2_2_0.98_29.jpg\",\"fileName\":\"adv_2_2_0.98_29.jpg\",\"hash\":\"ccda0d81687f46c5c9ccbd219ce8fbd0073a71f9\",\"id\":585,\"size\":838,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_3_3_0.98_7.jpg\",\"fileName\":\"orig_3_3_0.98_7.jpg\",\"hash\":\"40c0de1ef93e0b61b6c042a67912d52e731a6a1b\",\"id\":586,\"size\":845,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_6_6_0.90_16.jpg\",\"fileName\":\"orig_6_6_0.90_16.jpg\",\"hash\":\"31318063f39af5db0d99eb3cf60166b43a564a4a\",\"id\":587,\"size\":798,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_6_6_0.98_10.jpg\",\"fileName\":\"orig_6_6_0.98_10.jpg\",\"hash\":\"fd6a1f32f2e5d5e4ce246acb97a5dcd8497a76a5\",\"id\":588,\"size\":836,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_0_0_1.00_9.jpg\",\"fileName\":\"adv_0_0_1.00_9.jpg\",\"hash\":\"dc576d4549bd8fd0a63a82daf662c16245179233\",\"id\":589,\"size\":859,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_6_6_0.98_10.jpg\",\"fileName\":\"adv_6_6_0.98_10.jpg\",\"hash\":\"fd6a1f32f2e5d5e4ce246acb97a5dcd8497a76a5\",\"id\":590,\"size\":836,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_7_7_0.99_25.jpg\",\"fileName\":\"orig_7_7_0.99_25.jpg\",\"hash\":\"9d514fd5a1c17254731eb470fce673526e60e7a1\",\"id\":591,\"size\":862,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_8_8_1.00_21.jpg\",\"fileName\":\"orig_8_8_1.00_21.jpg\",\"hash\":\"659fc7140f711e4b8ee9909782d6f3595bc9ec24\",\"id\":592,\"size\":872,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_5_5_0.96_14.jpg\",\"fileName\":\"orig_5_5_0.96_14.jpg\",\"hash\":\"ce7d85880b58733395ab08fb9ad16fd76c6febeb\",\"id\":593,\"size\":856,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_5_8_0.91_19.jpg\",\"fileName\":\"orig_5_8_0.91_19.jpg\",\"hash\":\"5f1a6174e344e638fb026c069a02987a0b44f1ed\",\"id\":594,\"size\":828,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_7_7_1.00_6.jpg\",\"fileName\":\"orig_7_7_1.00_6.jpg\",\"hash\":\"cf58e45cd2d4fed3d27aa2a29c4eb78608eb1ac1\",\"id\":595,\"size\":828,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_7_7_1.00_6.jpg\",\"fileName\":\"adv_7_7_1.00_6.jpg\",\"hash\":\"cf58e45cd2d4fed3d27aa2a29c4eb78608eb1ac1\",\"id\":596,\"size\":828,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_0_0_1.00_22.jpg\",\"fileName\":\"adv_0_0_1.00_22.jpg\",\"hash\":\"8feabde387490bb7d3c8fe99d421d3d8d307b043\",\"id\":597,\"size\":893,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_7_7_1.00_11.jpg\",\"fileName\":\"orig_7_7_1.00_11.jpg\",\"hash\":\"3ce3e56206a6923abeee787c82c7aac2eaa05a84\",\"id\":598,\"size\":875,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_0_0_0.99_20.jpg\",\"fileName\":\"orig_0_0_0.99_20.jpg\",\"hash\":\"d5031c4cc712831297e5e67d18d1c524c1138c7d\",\"id\":599,\"size\":952,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_7_7_0.99_25.jpg\",\"fileName\":\"adv_7_7_0.99_25.jpg\",\"hash\":\"9d514fd5a1c17254731eb470fce673526e60e7a1\",\"id\":600,\"size\":862,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_9_9_0.87_8.jpg\",\"fileName\":\"adv_9_9_0.87_8.jpg\",\"hash\":\"aa4e3e4ce978ecd03bffa6b8067a957a225b13d6\",\"id\":601,\"size\":833,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_1_1_0.98_13.jpg\",\"fileName\":\"orig_1_1_0.98_13.jpg\",\"hash\":\"65d9d11003ec668f9e119b2ea43c1fed07d32d4f\",\"id\":602,\"size\":779,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_1_1_0.81_3.jpg\",\"fileName\":\"adv_1_1_0.81_3.jpg\",\"hash\":\"183863c6654381ff7f75740cfc98a8dd80c370e1\",\"id\":603,\"size\":787,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_5_8_0.46_19.jpg\",\"fileName\":\"adv_5_8_0.46_19.jpg\",\"hash\":\"ea622247d08e87fcbd91dcd521e1a19682df0790\",\"id\":604,\"size\":857,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_1_1_0.97_26.jpg\",\"fileName\":\"adv_1_1_0.97_26.jpg\",\"hash\":\"72f11c40bbbd2fde8228ae947cd25507ed67b09a\",\"id\":605,\"size\":755,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_7_7_1.00_11.jpg\",\"fileName\":\"adv_7_7_1.00_11.jpg\",\"hash\":\"3ce3e56206a6923abeee787c82c7aac2eaa05a84\",\"id\":606,\"size\":875,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_1_1_0.97_26.jpg\",\"fileName\":\"orig_1_1_0.97_26.jpg\",\"hash\":\"72f11c40bbbd2fde8228ae947cd25507ed67b09a\",\"id\":607,\"size\":755,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/orig_0_0_1.00_9.jpg\",\"fileName\":\"orig_0_0_1.00_9.jpg\",\"hash\":\"dc576d4549bd8fd0a63a82daf662c16245179233\",\"id\":608,\"size\":859,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_0_0_0.99_20.jpg\",\"fileName\":\"adv_0_0_0.99_20.jpg\",\"hash\":\"d5031c4cc712831297e5e67d18d1c524c1138c7d\",\"id\":609,\"size\":952,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/AW.zip\",\"fileName\":\"AW.zip\",\"hash\":\"e01c7b54e83392ea56d433248539a7965da0be07\",\"id\":610,\"size\":53147,\"testId\":88},{\"fetchUrl\":\"/aiFile/88/adv_0_0_0.99_12.jpg\",\"fileName\":\"adv_0_0_0.99_12.jpg\",\"hash\":\"29e64be4384552e05cb696f89e7c62b311507fa5\",\"id\":611,\"size\":901,\"testId\":88}],\"paramfileName\":\"\",\"log\":\"2025-04-11 09:26:08.336050: I tensorflow/core/platform/cpu_feature_guard.cc:182] This TensorFlow binary is optimized to use available CPU instructions in performance-critical operations.\\nTo enable the following instructions: AVX2 FMA, in other operations, rebuild TensorFlow with the appropriate compiler flags.\\n2025-04-11 09:26:09.264372: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Warning: Could not find TensorRT\\n\\r  0%|          | 0/313 [00:00<?, ?it/s]\\r  0%|          | 0/313 [00:11<?, ?it/s]\\n\\nBSimpleNN\\n111\\ntorch.Size([32, 1, 28, 28])\\ntorch.Size([32])\\n\\nReached target output_num of 30. Exiting...\\n\\nOriginal Accuracy: 96.88%\\nAttack Success Rate: 9.38%\\n\\n\",\"paramHash\":\"\"}",
//   "totalParams": null,
//   "taskType": "weakness",
//   "taskSubtype": "whiteboxAdversarialSampleGeneration",
//   "algorithmType": "txfldkybbh",
//   "scenarioType": "imageClassification",
//   "modelType": "py",
//   "modelHash": "858a8766dcb54b622df0f2718ddd75fb54d9042f",
//   "datasetHash": "ba4aa4736ae470e06838592740871f07e4d19e24",
//   "paramfileHash": "",
//   "taskParams": "{\"modelName\":\"BSimpleNN\",\"modelHash\":\"858a8766dcb54b622df0f2718ddd75fb54d9042f\",\"modelType\":\"py\",\"paramfileHash\":\"5228ee8fcd977af90f607a95e24779a6a892f76c\",\"paramfileType\":\"pth\",\"datasetName\":\"aw\",\"datasetHash\":\"ba4aa4736ae470e06838592740871f07e4d19e24\",\"outputNum\":30,\"imageSize\":28,\"normalizeMean\":\"0.1307\",\"normalizeStd\":\"0.3081\",\"nc\":1}"
// }

// const result = extractResultBW(detailInfo.result);

const resultMock = {
  images: [
    {
      fetchUrl: '/aiFile/88/adv_2_2_0.94_0.jpg',
      fileName: 'adv_2_2_0.94_0.jpg',
      hash: '8cb1c41e84e2bb4967004b957df9b647062adea9',
      id: 551,
      size: 863,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_7_7_0.93_27.jpg',
      fileName: 'orig_7_7_0.93_27.jpg',
      hash: '4fca5608994e64fc63b8075cd28020be347b5521',
      id: 552,
      size: 873,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_5_8_0.29_2.jpg',
      fileName: 'adv_5_8_0.29_2.jpg',
      hash: '13c5f264292beafe14e0fa5faa5e397f1d033b7e',
      id: 553,
      size: 921,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_2_2_0.94_0.jpg',
      fileName: 'orig_2_2_0.94_0.jpg',
      hash: '8cb1c41e84e2bb4967004b957df9b647062adea9',
      id: 554,
      size: 863,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_1_1_0.94_15.jpg',
      fileName: 'adv_1_1_0.94_15.jpg',
      hash: 'f2badf76cb26ed381b71d165066ddf392bd8a0f6',
      id: 555,
      size: 807,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_8_8_1.00_4.jpg',
      fileName: 'adv_8_8_1.00_4.jpg',
      hash: 'ee16fee4004fdb14e25b45966f438a63e37c7817',
      id: 556,
      size: 920,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_9_9_0.92_5.jpg',
      fileName: 'orig_9_9_0.92_5.jpg',
      hash: '0424f27f13623909bf7700b08fe3317944b8dedb',
      id: 557,
      size: 890,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_9_9_0.92_5.jpg',
      fileName: 'adv_9_9_0.92_5.jpg',
      hash: '0424f27f13623909bf7700b08fe3317944b8dedb',
      id: 558,
      size: 890,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_9_9_0.92_23.jpg',
      fileName: 'adv_9_9_0.92_23.jpg',
      hash: '7422e2a37e62ae64472f34ba0869dbf54d49af91',
      id: 559,
      size: 884,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_1_1_0.98_24.jpg',
      fileName: 'adv_1_1_0.98_24.jpg',
      hash: 'cc961f603170943d28f72ad76c29df07d0a0a47e',
      id: 560,
      size: 788,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_2_2_0.86_1.jpg',
      fileName: 'orig_2_2_0.86_1.jpg',
      hash: '1d219d6b305acb1acd35bbff42479337845f36be',
      id: 561,
      size: 866,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_0_0_0.99_12.jpg',
      fileName: 'orig_0_0_0.99_12.jpg',
      hash: '29e64be4384552e05cb696f89e7c62b311507fa5',
      id: 562,
      size: 901,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_1_1_0.94_15.jpg',
      fileName: 'orig_1_1_0.94_15.jpg',
      hash: 'f2badf76cb26ed381b71d165066ddf392bd8a0f6',
      id: 563,
      size: 807,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_5_5_0.96_14.jpg',
      fileName: 'adv_5_5_0.96_14.jpg',
      hash: 'ce7d85880b58733395ab08fb9ad16fd76c6febeb',
      id: 564,
      size: 856,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_1_1_0.98_13.jpg',
      fileName: 'adv_1_1_0.98_13.jpg',
      hash: '65d9d11003ec668f9e119b2ea43c1fed07d32d4f',
      id: 565,
      size: 779,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_2_2_0.92_28.jpg',
      fileName: 'adv_2_2_0.92_28.jpg',
      hash: 'f54e297e49a8c20bbe981d07207ab98ce6c2c3f5',
      id: 566,
      size: 903,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_4_4_1.00_18.jpg',
      fileName: 'orig_4_4_1.00_18.jpg',
      hash: '826a3f6bc01fe1be9fc1fae912e7e8cdbb3d61dc',
      id: 567,
      size: 862,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_1_1_0.90_17.jpg',
      fileName: 'adv_1_1_0.90_17.jpg',
      hash: '7fa45228d5c23bef8a7e55a3f5d3e3390c351703',
      id: 568,
      size: 780,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_1_1_0.90_17.jpg',
      fileName: 'orig_1_1_0.90_17.jpg',
      hash: '7fa45228d5c23bef8a7e55a3f5d3e3390c351703',
      id: 569,
      size: 780,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_0_0_1.00_22.jpg',
      fileName: 'orig_0_0_1.00_22.jpg',
      hash: '8feabde387490bb7d3c8fe99d421d3d8d307b043',
      id: 570,
      size: 893,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_6_8_0.25_16.jpg',
      fileName: 'adv_6_8_0.25_16.jpg',
      hash: '81316f3a8ee92aac09c9acdd5cca9e750e7feec4',
      id: 571,
      size: 818,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_2_2_0.92_28.jpg',
      fileName: 'orig_2_2_0.92_28.jpg',
      hash: 'f54e297e49a8c20bbe981d07207ab98ce6c2c3f5',
      id: 572,
      size: 903,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_3_3_0.98_7.jpg',
      fileName: 'adv_3_3_0.98_7.jpg',
      hash: '40c0de1ef93e0b61b6c042a67912d52e731a6a1b',
      id: 573,
      size: 845,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_4_4_1.00_18.jpg',
      fileName: 'adv_4_4_1.00_18.jpg',
      hash: '826a3f6bc01fe1be9fc1fae912e7e8cdbb3d61dc',
      id: 574,
      size: 862,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_5_5_0.58_2.jpg',
      fileName: 'orig_5_5_0.58_2.jpg',
      hash: '5aea3879e18572a9dd49424a0b53393e10a46de9',
      id: 575,
      size: 875,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_1_1_0.98_24.jpg',
      fileName: 'orig_1_1_0.98_24.jpg',
      hash: 'cc961f603170943d28f72ad76c29df07d0a0a47e',
      id: 576,
      size: 788,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_2_2_0.86_1.jpg',
      fileName: 'adv_2_2_0.86_1.jpg',
      hash: '1d219d6b305acb1acd35bbff42479337845f36be',
      id: 577,
      size: 866,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_9_9_0.87_8.jpg',
      fileName: 'orig_9_9_0.87_8.jpg',
      hash: 'aa4e3e4ce978ecd03bffa6b8067a957a225b13d6',
      id: 578,
      size: 833,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_7_7_0.93_27.jpg',
      fileName: 'adv_7_7_0.93_27.jpg',
      hash: '4fca5608994e64fc63b8075cd28020be347b5521',
      id: 579,
      size: 873,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_8_8_1.00_21.jpg',
      fileName: 'adv_8_8_1.00_21.jpg',
      hash: '659fc7140f711e4b8ee9909782d6f3595bc9ec24',
      id: 580,
      size: 872,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_1_1_0.81_3.jpg',
      fileName: 'orig_1_1_0.81_3.jpg',
      hash: '183863c6654381ff7f75740cfc98a8dd80c370e1',
      id: 581,
      size: 787,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_9_9_0.92_23.jpg',
      fileName: 'orig_9_9_0.92_23.jpg',
      hash: '7422e2a37e62ae64472f34ba0869dbf54d49af91',
      id: 582,
      size: 884,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_2_2_0.98_29.jpg',
      fileName: 'orig_2_2_0.98_29.jpg',
      hash: 'ccda0d81687f46c5c9ccbd219ce8fbd0073a71f9',
      id: 583,
      size: 838,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_8_8_1.00_4.jpg',
      fileName: 'orig_8_8_1.00_4.jpg',
      hash: 'ee16fee4004fdb14e25b45966f438a63e37c7817',
      id: 584,
      size: 920,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_2_2_0.98_29.jpg',
      fileName: 'adv_2_2_0.98_29.jpg',
      hash: 'ccda0d81687f46c5c9ccbd219ce8fbd0073a71f9',
      id: 585,
      size: 838,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_3_3_0.98_7.jpg',
      fileName: 'orig_3_3_0.98_7.jpg',
      hash: '40c0de1ef93e0b61b6c042a67912d52e731a6a1b',
      id: 586,
      size: 845,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_6_6_0.90_16.jpg',
      fileName: 'orig_6_6_0.90_16.jpg',
      hash: '31318063f39af5db0d99eb3cf60166b43a564a4a',
      id: 587,
      size: 798,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_6_6_0.98_10.jpg',
      fileName: 'orig_6_6_0.98_10.jpg',
      hash: 'fd6a1f32f2e5d5e4ce246acb97a5dcd8497a76a5',
      id: 588,
      size: 836,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_0_0_1.00_9.jpg',
      fileName: 'adv_0_0_1.00_9.jpg',
      hash: 'dc576d4549bd8fd0a63a82daf662c16245179233',
      id: 589,
      size: 859,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_6_6_0.98_10.jpg',
      fileName: 'adv_6_6_0.98_10.jpg',
      hash: 'fd6a1f32f2e5d5e4ce246acb97a5dcd8497a76a5',
      id: 590,
      size: 836,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_7_7_0.99_25.jpg',
      fileName: 'orig_7_7_0.99_25.jpg',
      hash: '9d514fd5a1c17254731eb470fce673526e60e7a1',
      id: 591,
      size: 862,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_8_8_1.00_21.jpg',
      fileName: 'orig_8_8_1.00_21.jpg',
      hash: '659fc7140f711e4b8ee9909782d6f3595bc9ec24',
      id: 592,
      size: 872,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_5_5_0.96_14.jpg',
      fileName: 'orig_5_5_0.96_14.jpg',
      hash: 'ce7d85880b58733395ab08fb9ad16fd76c6febeb',
      id: 593,
      size: 856,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_5_8_0.91_19.jpg',
      fileName: 'orig_5_8_0.91_19.jpg',
      hash: '5f1a6174e344e638fb026c069a02987a0b44f1ed',
      id: 594,
      size: 828,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_7_7_1.00_6.jpg',
      fileName: 'orig_7_7_1.00_6.jpg',
      hash: 'cf58e45cd2d4fed3d27aa2a29c4eb78608eb1ac1',
      id: 595,
      size: 828,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_7_7_1.00_6.jpg',
      fileName: 'adv_7_7_1.00_6.jpg',
      hash: 'cf58e45cd2d4fed3d27aa2a29c4eb78608eb1ac1',
      id: 596,
      size: 828,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_0_0_1.00_22.jpg',
      fileName: 'adv_0_0_1.00_22.jpg',
      hash: '8feabde387490bb7d3c8fe99d421d3d8d307b043',
      id: 597,
      size: 893,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_7_7_1.00_11.jpg',
      fileName: 'orig_7_7_1.00_11.jpg',
      hash: '3ce3e56206a6923abeee787c82c7aac2eaa05a84',
      id: 598,
      size: 875,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_0_0_0.99_20.jpg',
      fileName: 'orig_0_0_0.99_20.jpg',
      hash: 'd5031c4cc712831297e5e67d18d1c524c1138c7d',
      id: 599,
      size: 952,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_7_7_0.99_25.jpg',
      fileName: 'adv_7_7_0.99_25.jpg',
      hash: '9d514fd5a1c17254731eb470fce673526e60e7a1',
      id: 600,
      size: 862,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_9_9_0.87_8.jpg',
      fileName: 'adv_9_9_0.87_8.jpg',
      hash: 'aa4e3e4ce978ecd03bffa6b8067a957a225b13d6',
      id: 601,
      size: 833,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_1_1_0.98_13.jpg',
      fileName: 'orig_1_1_0.98_13.jpg',
      hash: '65d9d11003ec668f9e119b2ea43c1fed07d32d4f',
      id: 602,
      size: 779,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_1_1_0.81_3.jpg',
      fileName: 'adv_1_1_0.81_3.jpg',
      hash: '183863c6654381ff7f75740cfc98a8dd80c370e1',
      id: 603,
      size: 787,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_5_8_0.46_19.jpg',
      fileName: 'adv_5_8_0.46_19.jpg',
      hash: 'ea622247d08e87fcbd91dcd521e1a19682df0790',
      id: 604,
      size: 857,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_1_1_0.97_26.jpg',
      fileName: 'adv_1_1_0.97_26.jpg',
      hash: '72f11c40bbbd2fde8228ae947cd25507ed67b09a',
      id: 605,
      size: 755,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_7_7_1.00_11.jpg',
      fileName: 'adv_7_7_1.00_11.jpg',
      hash: '3ce3e56206a6923abeee787c82c7aac2eaa05a84',
      id: 606,
      size: 875,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_1_1_0.97_26.jpg',
      fileName: 'orig_1_1_0.97_26.jpg',
      hash: '72f11c40bbbd2fde8228ae947cd25507ed67b09a',
      id: 607,
      size: 755,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/orig_0_0_1.00_9.jpg',
      fileName: 'orig_0_0_1.00_9.jpg',
      hash: 'dc576d4549bd8fd0a63a82daf662c16245179233',
      id: 608,
      size: 859,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_0_0_0.99_20.jpg',
      fileName: 'adv_0_0_0.99_20.jpg',
      hash: 'd5031c4cc712831297e5e67d18d1c524c1138c7d',
      id: 609,
      size: 952,
      testId: 88
    },
    {
      fetchUrl: '/aiFile/88/adv_0_0_0.99_12.jpg',
      fileName: 'adv_0_0_0.99_12.jpg',
      hash: '29e64be4384552e05cb696f89e7c62b311507fa5',
      id: 611,
      size: 901,
      testId: 88
    }
  ],
  originalAccuracy: 96.88,
  attackSuccessRate: 9.38
}
const result2 = extractResultBWCalc(resultMock);
console.log(result);
// console.log(result2);


// 很好，接下来写另外一个函数，对于解析的结果进一步进行统计。
// 完善 extractResultBWCalc 函数，他的输入是上一步的输出。
// 他的输出是一个对象，其中 originalAccuracy 和 attackSuccessRate 不变。
// 增加一个 advSum 属性，他的值是 images 数组中所有 fileName 以 adv 开头的元素数量总和。
// 增加一个对象数组 imageList ，他的生成逻辑如下：
// 统计 images 的每个元素，其中 fileName 的新式是这样的 adv_2_2_0.94_0 {'adv'|'orig'_{origClass}_{afterClass}_{probability}_{id}}.xxx  ，找到 id 相同的两个元素，他们将用于生成imageList的对象元素。
// imageList 的对象元素包含这些值：
// id: 序号；
// origFileName: 两个元素中，以 orig 开头的元素的 fileName；
// origFetchUrl: 两个元素中，以 orig 开头的元素的 fetchUrl；
// advFileName：两个元素中，以 adv 开头的元素的 fileName；
// advFetchUrl：两个元素中，以 adv 开头的元素的 fetchUrl；
// origClass: 两个元素中，以 orig 开头的元素的 fileName 的 origClass；
// origClassProbability: 两个元素中，以 orig 开头的元素的 fileName 的 probability
// afterClass: 两个元素中，以 adv 开头的元素的 fileName 的 afterClass;
// afterClassProbability: 两个元素中，以 adv 开头的元素的 fileName 的 probability;