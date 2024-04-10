class Checkout {
  min_stack: number[]
  queue: number[]

  constructor() {
    this.min_stack = []
    this.queue = []
  }

  get_max(): number {
    return this.min_stack[0] ?? -1
  }

  add(value: number): void {
    // console.log('add s:', value, { ms: this.min_stack, qu: this.queue });
    this.queue.push(value)
    if (this.min_stack.length === 0) {
      this.min_stack.push(value)
    } else {
      if (value >= (this.min_stack.at(-1) ?? Infinity)) {
        while (value > (this.min_stack.at(-1) ?? Infinity)) {
          this.min_stack.pop()
        }
      }
      this.min_stack.push(value)
    }
    // console.log('add e:', value, { ms: this.min_stack, qu: this.queue });
  }

  remove(): number {
    // console.log('remove s:', { ms: this.min_stack, qu: this.queue });
    const first = this.queue.shift() ?? -1
    if (first === this.min_stack[0]) {
      this.min_stack.shift()
    }
    // console.log('remove e:', { ms: this.min_stack, qu: this.queue });
    return first
  }
}

// const action: ('get_max' | 'remove' | 'add')[] = ["get_max", "remove", "get_max", "add", "get_max", "remove", "get_max", "remove", "add", "remove", "remove", "remove", "add", "remove", "get_max", "remove", "get_max", "add", "add", "get_max", "add", "get_max", "get_max", "get_max", "add", "remove", "get_max", "add", "get_max", "get_max", "get_max", "remove", "add", "add", "add", "add", "remove", "remove", "get_max", "remove", "remove", "get_max", "add", "add", "remove", "add", "add", "add", "add", "remove", "get_max", "add", "get_max", "get_max", "remove", "get_max", "get_max", "get_max", "add", "remove", "add", "remove", "get_max", "get_max", "get_max", "add", "remove", "add", "add", "add", "remove", "get_max", "remove", "get_max", "get_max", "get_max", "remove", "add", "remove", "add", "add", "remove", "add", "remove", "add", "remove", "remove", "add", "remove", "remove", "remove", "add", "add", "get_max", "add", "remove", "add", "add", "remove"];
// const value = [[], [], [], [46], [], [], [], [], [868], [], [], [], [525], [], [], [], [], [123], [646], [], [229], [], [], [], [871], [], [], [285], [], [], [], [], [45], [140], [837], [545], [], [], [], [], [], [], [561], [237], [], [633], [98], [806], [717], [], [], [186], [], [], [], [], [], [], [268], [], [29], [], [], [], [], [866], [], [239], [3], [850], [], [], [], [], [], [], [], [310], [], [674], [770], [], [525], [], [425], [], [], [720], [], [], [], [373], [411], [], [831], [], [765], [701], []];
// const expect = [-1, -1, -1, null, 46, 46, -1, -1, null, 868, -1, -1, null, 525, -1, -1, -1, null, null, 646, null, 646, 646, 646, null, 123, 871, null, 871, 871, 871, 646, null, null, null, null, 229, 871, 837, 285, 45, 837, null, null, 140, null, null, null, null, 837, 806, null, 806, 806, 545, 806, 806, 806, null, 561, null, 237, 806, 806, 806, null, 633, null, null, null, 98, 866, 806, 866, 866, 866, 717, null, 186, null, null, 268, null, 29, null, 866, 239, null, 3, 850, 310, null, null, 770, null, 674, null, null, 770];

// function caseTest(action: ('get_max' | 'remove' | 'add')[], value: number[][], expect: (number | null)[]) {
//   var obj = new Checkout()
//   action.map((ac, i) => {
//     switch (ac) {
//       case 'add':
//         obj.add(value[i][0])
//         break;
//       case 'get_max':
//         var cur = obj.get_max()
//         if (cur !== expect[i]) {
//           throw new Error(`step ${i}: get_max not expect, the expect is ${expect[i]}, but the obj is ${JSON.stringify(obj)}`,);
//         }
//         break;
//       case 'remove':
//         var cur = obj.remove()
//         if (cur !== expect[i]) {
//           throw new Error(`step ${i}: remove not expect, the obj is ${JSON.stringify(obj)}`,);
//         }
//         break;
//     }
//   })

// }

// caseTest(action, value, expect)