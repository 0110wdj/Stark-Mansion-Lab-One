function extractResult(jsonString) {
  try {
    // 首先解析外层的 JSON 字符串
    const outerJson = JSON.parse(jsonString);
    const logContent = outerJson.log;

    // 在 log 内容中查找 RESULT
    const resultPattern = /RESULT\s*({[\s\S]*?})/;
    const match = logContent.match(resultPattern);

    if (match?.[1]) {
      try {
        // 处理 JSON 字符串中的单引号，将其替换为双引号
        const jsonStr = match[1].replace(/'/g, '"');
        return JSON.parse(jsonStr);
      } catch (error) {
        console.error('Failed to parse inner JSON:', error);
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error('Failed to parse outer JSON:', error);
    return null;
  }
}

// 示例字符串
const detailInfo = {
  "id": 79,
  "createBy": 1,
  "modelId": 23,
  "modelName": "BSimpleCNN",
  "datasetId": 37,
  "datasetName": "lbx",
  "modelDatasetId": 39,
  "startAt": 1744353732078,
  "totalTime": 72643,
  "state": 2,
  "result": "{\n  \"log\": \"Traceback (most recent call last):\\n  File \\\"/ai_test/robustness_analysis/tool.py\\\", line 344, in get_choices\\n    choices += mod.__all__\\nAttributeError: module 'uploaded_models.configs' has no attribute '__all__'\\n\\nBSimpleCNN <module 'uploaded_models' (namespace)>\\nlstm <module 'uploaded_models' (namespace)>\\nresnet50 <module 'uploaded_models' (namespace)>\\nmobilenet_v2 <module 'uploaded_models' (namespace)>\\nfacenet <module 'uploaded_models' (namespace)>\\nyolov3 <module 'uploaded_models' (namespace)>\\n不SimpleCNN <module 'uploaded_models' (namespace)>\\nvgg16_bn <module 'uploaded_models' (namespace)>\\npacage configs is not a valid model file, loading fail.\\ncpu\\n/ai_test/my_steal/output/test_2025-04-11-06-42-18\\nTotal 49984 Data.\\nTotal 9984 Data.\\n./pretrained_models/lbx_BSimpleCNN.pth\\nError loading full model: 'model'\\nRESULT\\n{'准确率': 0.6816907051282052, '误判率': 0.3183092948717948, '召回率': 0.6817317073170732, '查准率': 0.6865659068033447, 'F1值': 0.6757745451012286, '加权平均召回率': 0.6816907051282052, '每个类别的召回率': [0.774, 0.858, 0.675, 0.376, 0.6, 0.475, 0.806, 0.775, 0.771, 0.7073170731707317], '加权平均查准率': 0.6863461908862776, '每个类别的查准率': [0.6570458404074703, 0.7506561679790026, 0.5196304849884527, 0.618421052631579, 0.6696428571428571, 0.6854256854256854, 0.6744769874476988, 0.6652360515021459, 0.8014553014553014, 0.8236686390532545], '加权平均F1值': 0.6756378510647911, '每个类别的F1值': [0.7107438016528924, 0.8007466168922072, 0.58721183123097, 0.46766169154228854, 0.6329113924050632, 0.5611340815121086, 0.7343963553530752, 0.7159353348729792, 0.7859327217125384, 0.761071623838163], '分类结果': '              precision    recall  f1-score   support\\\\n\\\\n    airplane       0.66      0.77      0.71      1000\\\\n  automobile       0.75      0.86      0.80      1000\\\\n        bird       0.52      0.68      0.59      1000\\\\n         cat       0.62      0.38      0.47      1000\\\\n        deer       0.67      0.60      0.63      1000\\\\n         dog       0.69      0.47      0.56      1000\\\\n        frog       0.67      0.81      0.73      1000\\\\n       horse       0.67      0.78      0.72      1000\\\\n        ship       0.80      0.77      0.79      1000\\\\n       truck       0.82      0.71      0.76       984\\\\n\\\\n    accuracy                           0.68      9984\\\\n   macro avg       0.69      0.68      0.68      9984\\\\nweighted avg       0.69      0.68      0.68      9984\\\\n'}\\n\\n\",\n  \"paramHash\": \"\",\n  \"paramfileName\": \"\"\n}",
  "totalParams": null,
  "taskType": "weakness",
  "taskSubtype": "robustnessAnalysis",
  "algorithmType": "txfllbx",
  "scenarioType": "imageClassification",
  "modelType": "py",
  "modelHash": "dbc3dcdd146d2af7a2b24f533e5bd26bb6d125c9",
  "datasetHash": "a6027ab5fc02c2cd28b4b184626e8850243d9365",
  "paramfileHash": "",
  "taskParams": "{\"modelName\":\"BSimpleCNN\",\"modelHash\":\"dbc3dcdd146d2af7a2b24f533e5bd26bb6d125c9\",\"paramfileHash\":\"fa17e6cf6631f10622bf8684818efbf60845cb40\",\"datasetName\":\"lbx\",\"datasetHash\":\"a6027ab5fc02c2cd28b4b184626e8850243d9365\",\"modelType\":\"py\",\"paramfileType\":\"pth\",\"batchSize\":32,\"taskType\":\"Classification\",\"imageSize\":32,\"normalizeMean\":\"0.4914, 0.4822, 0.4465\",\"normalizeStd\":\"0.2471, 0.2435, 0.2616\",\"nc\":3}"
}
const result = extractResult(detailInfo.result);
console.log(result);