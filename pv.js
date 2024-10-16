for (const key of checkedKeys) {
  const key_path = key.split('-');
  console.log(key_path);
  const len = key_path.length;

  if (!(len > 1)) {
    continue
  }
  if (len === 2) {
    scenes[key_path[1]].picked_state = true;
    continue
  }
  if (len === 3) {
    scenes[key_path[1]].cases[key_path[2]].picked_state = true;
    continue
  }
  if (len === 4) {
    scenes[key_path[1]].cases[key_path[2]].packets[key_path[3] - 1].picked_state = true;
    continue
  }

  // 选中了子节点
  const [root, s_i, c_i, p_i, f_i, ...rest_field_path] = key_path;
  let currentObj = scenes[s_i].cases[c_i].packets[p_i - 1].fields[f_i];

  if (rest_field_path.length > 0) {
    for (const f_c_i of rest_field_path) {
      currentObj = currentObj.children[f_c_i];
    }
  }
  console.log(currentObj);

  currentObj.picked_state = true;
}
