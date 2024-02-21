
function translation(path) {

  // first step : split path by \.\[\]

  const pathArr = path.split(/[\.\[\]]+/)

  // second step : delete empty string element (such as 'a.b[0]')

  if (pathArr.at(-1) === '') {
    pathArr.pop()
  }

  return pathArr

}

function set(obj, path, value) {

  // first step : translation path to Array

  const pathArr = Array.isArray(path) ? path : translation(path);

  // if it's empty, end directly

  if (pathArr.length === 0) {
    return
  }

  // second step : traversal pathArr

  let pointObj = obj;

  pathArr.forEach((key, i) => {

    if (i === pathArr.length - 1) {

      pointObj[key] = value

    } else {

      if (!pointObj.hasOwnProperty(key)) {

        const next = pathArr[i + 1];

        pointObj[key] = ((+next + '') === next) ? [] : {}

      }
    }

    pointObj = pointObj[key]

  });

}

const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}

// set(obj, 'a.b.c', 'BFE')
// set(obj, 'a.b.c.0', 'BFE')
// set(obj, 'a.b.c[1]', 'BFE')
set(obj, 'a.c.d[0]', 'BFE')
// set(obj, 'a.c.d.01', 'BFE')
console.log(obj);
console.log(obj.a.b.c);
console.log(obj.a.c.d);