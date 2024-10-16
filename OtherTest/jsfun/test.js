let counter = 0
const mountFieldCount = (fields, prefixIndex, setState, parentNode) => {
  console.log(counter++);

  if (!Array.isArray(fields)) return
  for (const field of fields) {
    console.log(counter++);
    const fieldNode = {};
    fieldNode.test_case_statistics = field.test_case_statistics;
    fieldNode.children = [];
    const count = field.test_case_statistics.extended_count + field.test_case_statistics.primary_count + field.test_case_statistics.secondary_count;
    fieldNode.lable_name = `${field.field_name}(${count || 0})`
    if (field.children?.length) {
      mountFieldCount(field.children, prefixIndex, setState, fieldNode)
    }
    parentNode.children.push(fieldNode);
  }
};

const data = [];
scenes.forEach((scene, index) => {
  const sceneNode = {}
  const count = scene.test_case_statistics.extended_count + scene.test_case_statistics.primary_count + scene.test_case_statistics.secondary_count;
  sceneNode.lable_name = `${scene.scene_name}(${count || 0})`;
  sceneNode.children = [];
  sceneNode.test_case_statistics = scene.test_case_statistics;
  scene.cases.forEach((ca, caseIndex) => {
    const caseNode = {};
    const count = ca.test_case_statistics.extended_count + ca.test_case_statistics.primary_count + ca.test_case_statistics.secondary_count;
    caseNode.lable_name = `${ca.case_name}(${count || 0})`
    caseNode.test_case_statistics = ca.test_case_statistics;
    (ca.packets ?? []).forEach((packet, packetIndex) => {
      const packetNode = {}
      const count = packet.test_case_statistics.extended_count + packet.test_case_statistics.primary_count + packet.test_case_statistics.secondary_count;
      packetNode.lable_name = `${packet.packet_name}(${count || 0})`;
      packetNode.test_case_statistics = packet.test_case_statistics;
      packetNode.children = [];
      packet.fields.forEach((field, fieldIndex) => {
        const count = field.test_case_statistics.extended_count + field.test_case_statistics.primary_count + field.test_case_statistics.secondary_count;
        const newField = {}
        newField.lable_name = `${field.field_name}(${count || 0})`;
        newField.test_case_statistics = field.test_case_statistics;
        newField.children = [];
        if (field.children?.length) {
          console.log(counter++);
          mountFieldCount(field.children, [index, caseIndex], 1, newField)
        }
        packetNode.children.push(newField)
      })
    })
  })
})

console.log(scenes, data);