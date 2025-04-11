function extractResultBackDoor(jsonString) {
  try {
    const result = JSON.parse(jsonString);
    const log = result.log;

    // 提取两个表格之间的内容
    const evaluationSection = log.split('--------------------------evaluation--------------------------')[1];
    const [originalTable, triggeredTable] = evaluationSection.split('## triggered test data performance:');

    // 解析原始测试数据表格
    const originalRows = originalTable.split('\n')
      .filter(line => {
        const parts = line.trim().split(/\s+/);
        // 确保行包含至少5个部分，且第一个部分是数字
        if (parts.length < 5 || Number.isNaN(Number.parseInt(parts[0]))) {
          return false;
        }
        // 检查所有数值是否有效
        return !parts.slice(1).some(val => Number.isNaN(Number.parseFloat(val)));
      })
      .map(line => {
        const [id, precision, recall, f1score, support] = line.trim().split(/\s+/);
        return {
          id: Number.parseInt(id),
          precision: Number.parseFloat(precision),
          recall: Number.parseFloat(recall),
          f1score: Number.parseFloat(f1score),
          support: Number.parseInt(support)
        };
      });

    // 解析触发测试数据表格
    const triggeredRows = triggeredTable.split('\n')
      .filter(line => {
        const parts = line.trim().split(/\s+/);
        // 确保行包含至少5个部分，且第一个部分是数字
        if (parts.length < 5 || Number.isNaN(Number.parseInt(parts[0]))) {
          return false;
        }
        // 检查所有数值是否有效
        return !parts.slice(1).some(val => Number.isNaN(Number.parseFloat(val)));
      })
      .map(line => {
        const [id, precision, recall, f1score, support] = line.trim().split(/\s+/);
        return {
          id: Number.parseInt(id),
          precision: Number.parseFloat(precision),
          recall: Number.parseFloat(recall),
          f1score: Number.parseFloat(f1score),
          support: Number.parseInt(support)
        };
      });

    // 提取准确率
    const originalAccuracy = Number.parseFloat(originalTable.match(/accuracy\s+(\d+\.\d+)/)[1]);
    const triggeredAccuracy = Number.parseFloat(triggeredTable.match(/accuracy\s+(\d+\.\d+)/)[1]);

    return {
      originalData: originalRows,
      triggeredData: triggeredRows,
      originalAccuracy,
      triggeredAccuracy
    };
  } catch (error) {
    console.error('解析结果时出错:', error);
    return null;
  }
}

// 示例字符串
const detailInfo = {
  "id": 83,
  "createBy": 1,
  "modelId": 0,
  "modelName": null,
  "datasetId": 38,
  "datasetName": "后门植入测试1",
  "modelDatasetId": null,
  "startAt": 1744358066590,
  "totalTime": 67957,
  "state": 2,
  "result": "{\n  \"log\": \"\\r  0%|          | 0/938 [00:00<?, ?it/s]\\r  2%|▏         | 18/938 [00:00<00:05, 175.02it/s]\\r  4%|▍         | 41/938 [00:00<00:04, 202.87it/s]\\r  7%|▋         | 65/938 [00:00<00:04, 215.65it/s]\\r  9%|▉         | 89/938 [00:00<00:03, 221.64it/s]\\r 12%|█▏        | 113/938 [00:00<00:03, 225.29it/s]\\r 14%|█▍        | 136/938 [00:00<00:03, 225.77it/s]\\r 17%|█▋        | 160/938 [00:00<00:03, 228.13it/s]\\r 20%|█▉        | 183/938 [00:00<00:03, 225.00it/s]\\r 22%|██▏       | 206/938 [00:00<00:03, 221.94it/s]\\r 24%|██▍       | 229/938 [00:01<00:03, 183.40it/s]\\r 27%|██▋       | 252/938 [00:01<00:03, 194.79it/s]\\r 29%|██▉       | 275/938 [00:01<00:03, 203.30it/s]\\r 32%|███▏      | 298/938 [00:01<00:03, 210.30it/s]\\r 34%|███▍      | 322/938 [00:01<00:02, 217.10it/s]\\r 37%|███▋      | 346/938 [00:01<00:02, 221.74it/s]\\r 39%|███▉      | 370/938 [00:01<00:02, 225.72it/s]\\r 42%|████▏     | 393/938 [00:01<00:02, 225.61it/s]\\r 44%|████▍     | 417/938 [00:01<00:02, 228.26it/s]\\r 47%|████▋     | 440/938 [00:02<00:02, 211.68it/s]\\r 49%|████▉     | 464/938 [00:02<00:02, 217.95it/s]\\r 52%|█████▏    | 488/938 [00:02<00:02, 221.53it/s]\\r 54%|█████▍    | 511/938 [00:02<00:01, 223.92it/s]\\r 57%|█████▋    | 535/938 [00:02<00:01, 226.16it/s]\\r 59%|█████▉    | 558/938 [00:02<00:01, 225.99it/s]\\r 62%|██████▏   | 581/938 [00:02<00:02, 174.71it/s]\\r 64%|██████▍   | 603/938 [00:02<00:01, 185.38it/s]\\r 67%|██████▋   | 627/938 [00:02<00:01, 197.74it/s]\\r 69%|██████▉   | 649/938 [00:03<00:01, 201.95it/s]\\r 72%|███████▏  | 672/938 [00:03<00:01, 209.15it/s]\\r 74%|███████▍  | 694/938 [00:03<00:01, 157.15it/s]\\r 76%|███████▋  | 717/938 [00:03<00:01, 173.21it/s]\\r 79%|███████▊  | 738/938 [00:03<00:01, 180.45it/s]\\r 81%|████████  | 758/938 [00:03<00:01, 109.90it/s]\\r 83%|████████▎ | 774/938 [00:04<00:01, 108.08it/s]\\r 84%|████████▍ | 788/938 [00:04<00:01, 105.03it/s]\\r 85%|████████▌ | 801/938 [00:04<00:01, 105.25it/s]\\r 87%|████████▋ | 813/938 [00:04<00:01, 102.64it/s]\\r 88%|████████▊ | 825/938 [00:04<00:01, 102.94it/s]\\r 89%|████████▉ | 837/938 [00:04<00:00, 105.81it/s]\\r 91%|█████████ | 849/938 [00:04<00:00, 103.26it/s]\\r 92%|█████████▏| 860/938 [00:04<00:00, 104.33it/s]\\r 93%|█████████▎| 873/938 [00:05<00:00, 109.95it/s]\\r 94%|█████████▍| 885/938 [00:05<00:00, 109.47it/s]\\r 96%|█████████▌| 897/938 [00:05<00:00, 105.94it/s]\\r 97%|█████████▋| 909/938 [00:05<00:00, 106.97it/s]\\r 98%|█████████▊| 920/938 [00:05<00:00, 107.00it/s]\\r 99%|█████████▉| 931/938 [00:05<00:00, 89.50it/s] \\r100%|██████████| 938/938 [00:05<00:00, 158.20it/s]\\n\\n# --------------------------read dataset: 后门植入测试1 --------------------------\\n# --------------------------construct poisoned dataset--------------------------\\n10\\n<class 'torch.Tensor'>\\n## generate train Bad Imgs\\nInjecting Over: 6000 Bad Imgs, 54000 Clean Imgs (0.10)\\n10\\n<class 'torch.Tensor'>\\n## generate test Bad Imgs\\nInjecting Over: 0 Bad Imgs, 10000 Clean Imgs (0.00)\\n10\\n<class 'torch.Tensor'>\\n## generate test Bad Imgs\\nInjecting Over: 2000 Bad Imgs, 8000 Clean Imgs (0.20)\\n# --------------------------begin training backdoor model--------------------------\\n### target label is 0, EPOCH is 1, Learning Rate is 0.001000\\n### Train set size is 60000, ori test set size is 10000, tri test set size is 10000\\n\\n# EPOCH0   loss: 84.2079  training acc: 0.2022, ori testing acc: 0.1145, trigger testing acc: 0.2907\\n\\n# --------------------------evaluation--------------------------\\n## original test data performance:\\n              precision    recall  f1-score   support\\n\\n           0       0.11      0.99      0.20       980\\n           1       0.00      0.00      0.00      1135\\n           2       0.00      0.00      0.00      1032\\n           3       0.00      0.00      0.00      1010\\n           4       0.00      0.00      0.00       982\\n           5       0.00      0.00      0.00       892\\n           6       0.00      0.00      0.00       958\\n           7       0.12      0.17      0.14      1028\\n           8       0.00      0.00      0.00       974\\n           9       0.00      0.00      0.00      1009\\n\\n    accuracy                           0.11     10000\\n   macro avg       0.02      0.12      0.03     10000\\nweighted avg       0.02      0.11      0.03     10000\\n\\n## triggered test data performance:\\n              precision    recall  f1-score   support\\n\\n           0       0.32      0.99      0.48      2792\\n           1       0.00      0.00      0.00       928\\n           2       0.00      0.00      0.00       833\\n           3       0.00      0.00      0.00       798\\n           4       0.00      0.00      0.00       784\\n           5       0.00      0.00      0.00       698\\n           6       0.00      0.00      0.00       747\\n           7       0.12      0.17      0.14       809\\n           8       0.00      0.00      0.00       792\\n           9       0.00      0.00      0.00       819\\n\\n    accuracy                           0.29     10000\\n   macro avg       0.04      0.12      0.06     10000\\nweighted avg       0.10      0.29      0.14     10000\\n\\n\\n\",\n  \"paramHash\": \"c9f912ba278d20feb1a935547ce8313d09e9e04d\",\n  \"paramfileName\": \"后门植入测试1\"\n}",
  "totalParams": null,
  "taskType": "weakness",
  "taskSubtype": "backdoorInjection",
  "algorithmType": "txflhm",
  "scenarioType": "imageClassification",
  "modelType": null,
  "modelHash": null,
  "datasetHash": "ba4aa4736ae470e06838592740871f07e4d19e24",
  "paramfileHash": null,
  "taskParams": "{\"epoch\":1,\"poisonedPortion\":0.1,\"triggerLabel\":0,\"datasetName\":\"后门植入测试1\",\"datasetHash\":\"ba4aa4736ae470e06838592740871f07e4d19e24\",\"modelName\":\"modelName\",\"imageSize\":28,\"nc\":1}"
}
const result = extractResultBackDoor(detailInfo.result);
console.log(result);