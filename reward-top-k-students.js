const { areTwoArrayEqual } = require('../../js/compare-two-array.js')

class MaxHeap {
  constructor() {
    this.heap = []
  }
  getParentIndex(index) {
    return parseInt(index / 2)
  }
  swap(from, to) {
    const store = this.heap[from]
    this.heap[from] = this.heap[to]
    this.heap[to] = store
  }
  getChildIndexes(index) {
    return {
      left: index * 2 + 1,
      right: index * 2 + 2
    }
  }
  add(element, meta) {
    this.heap.push({ element, meta })
    let currentWorkingIndex = this.heap.length - 1
    while (this.heap.length > 1) {
      const parentIndex = this.getParentIndex(currentWorkingIndex)
      if (
        this.heap[parentIndex].element < this.heap[currentWorkingIndex].element
      ) {
        this.swap(parentIndex, currentWorkingIndex)
        currentWorkingIndex = parentIndex
        if (parentIndex === 0) {
          break
        }
      } else {
        break
      }
    }
    return
  }
  remove() {
    if (this.heap.length <= 0) {
      return []
    }
    const biggestElement = this.heap[0]
    if (this.heap.length === 1) {
      this.heap = []
      return biggestElement
    }
    const lastElement = this.heap.pop()
    this.heap[0] = lastElement
    let currentWorkingIndex = 0
    while (this.heap.length > 1) {
      const childIndexes = this.getChildIndexes(currentWorkingIndex)
      let biggestIndex =
        (this.heap[childIndexes.left] !== undefined &&
          this.heap[childIndexes.left].element) <
          (this.heap[childIndexes.right] !== undefined &&
            this.heap[childIndexes.right].element)
          ? childIndexes.right
          : childIndexes.left
      if (this.heap[childIndexes.right] === undefined) {
        biggestIndex = childIndexes.left
      }

      if (
        this.heap[biggestIndex] !== undefined &&
        this.heap[biggestIndex].element > this.heap[currentWorkingIndex].element
      ) {
        this.swap(biggestIndex, currentWorkingIndex)
        currentWorkingIndex = biggestIndex
        if (currentWorkingIndex === this.heap.length - 1) {
          break
        }
      } else {
        break
      }
    }
    return biggestElement
  }
}

class MinHeap {
  constructor() {
    this.heap = []
  }
  getLength() {
    return this.heap.length
  }
  getParentIndex(index) {
    return parseInt(index / 2)
  }
  swap(from, to) {
    const store = this.heap[from]
    this.heap[from] = this.heap[to]
    this.heap[to] = store
  }
  getChildIndexes(index) {
    return {
      left: index * 2 + 1,
      right: index * 2 + 2
    }
  }
  add(element) {
    this.heap.push(element)
    let currentWorkingIndex = this.heap.length - 1
    while (this.heap.length > 1) {
      const parentIndex = this.getParentIndex(currentWorkingIndex)
      if (this.heap[parentIndex] > this.heap[currentWorkingIndex]) {
        this.swap(parentIndex, currentWorkingIndex)
        currentWorkingIndex = parentIndex
        if (parentIndex === 0) {
          break
        }
      } else {
        break
      }
    }
    return
  }
  remove() {
    if (this.heap.length <= 0) {
      return []
    }
    const smallestElement = this.heap[0]
    if (this.heap.length === 1) {
      this.heap = []
      return smallestElement
    }
    const lastElement = this.heap.pop()
    this.heap[0] = lastElement
    let currentWorkingIndex = 0
    while (this.heap.length > 1) {
      const childIndexes = this.getChildIndexes(currentWorkingIndex)
      if (
        this.heap[childIndexes.left] !== undefined &&
        this.heap[childIndexes.right] !== undefined
      ) {
      }
      const smallestIndex =
        this.heap[childIndexes.left] > this.heap[childIndexes.right]
          ? childIndexes.right
          : childIndexes.left
      if (this.heap[smallestIndex] < this.heap[currentWorkingIndex]) {
        this.swap(smallestIndex, currentWorkingIndex)
        currentWorkingIndex = smallestIndex
        if (currentWorkingIndex === this.heap.length - 1) {
          break
        }
      } else {
        break
      }
    }
    return smallestElement
  }
}

var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  const positive_feedback_obj = (function () {
    const obj = {}
    for (const iterator of positive_feedback) {
      obj[iterator] = true
    }
    return obj
  })()
  const student_id_obj = (function () {
    const obj = {}
    for (const iterator of student_id) {
      obj[iterator] = 0
    }
    return obj
  })()

  const negative_feedback_obj = (function () {
    const obj = {}
    for (const iterator of negative_feedback) {
      obj[iterator] = true
    }
    return obj
  })()
  for (let index = 0; index < report.length; index++) {
    const iterator = report[index]
    let result = 0
    for (const splittedIterator of iterator.split(' ')) {
      if (positive_feedback_obj[splittedIterator]) {
        result += 3
      } else if (negative_feedback_obj[splittedIterator]) {
        result -= 1
      }
    }
    student_id_obj[student_id[index]] = result
  }
  const mapping_of_score_to_student_id = (function () {
    const obj = {}
    for (const iterator in student_id_obj) {
      if (!obj[student_id_obj[iterator]]) {
        obj[student_id_obj[iterator]] = []
      }
      obj[student_id_obj[iterator]].push(iterator)
    }
    return obj
  })()
  const maxHeap = new MaxHeap()
  for (const key in mapping_of_score_to_student_id) {
    maxHeap.add(
      Number(key),
      (function () {
        const minHeap = new MinHeap()
        for (const iterator of mapping_of_score_to_student_id[key]) {
          minHeap.add(Number(iterator))
        }
        return minHeap
      })()
    )
  }
  const output = []
  while (k > 0) {
    const element = maxHeap.remove()
    while (element.meta.getLength() && k--) {
      const stp = element.meta.remove()
      output.push(Number(stp))
    }
  }
  return output
}



let resp

resp = topStudents(
  (positive_feedback = ["zmyu", "kcynvdfcv", "yvayybzbvp", "notx"]),
  (negative_feedback = ["tiwcyebpu", "cyglv", "xhzwcewf", "vnvyuawz", "a", "hwbrlvu", "cpdyi", "eu", "vdbvgac", "pg"]),
  (report = ["hwbrlvu pg kcynvdfcv g pg cyglv vdbvgac odflrbply notx zmyu", "kcynvdfcv vdbvgac kcynvdfcv vdbvgac nwqqbliz cpdyi notx a yvayybzbvp notx", "g golirf gphojo cyglv cpdyi notx eu a yvayybzbvp fcqyraxvz", "kxljeqljdd vnvyuawz ul pg cpdyi tszsa notx eu xhzwcewf xkrk", "vnvyuawz ibapc cyglv xhzwcewf meabdq cpdyi xhzwcewf ytaeo ogho pg", "kcynvdfcv notx xhzwcewf vnvyuawz odjbojutve kcynvdfcv kcynvdfcv vdbvgac tiwcyebpu eu", "zmyu hwbrlvu zmyu gxkiytu rhvuf gd xhzwcewf cpdyi yvayybzbvp ybrxhogbzh"]),
  (student_id = [62295992, 560573909, 5313698, 842699354, 372590546, 171310323, 669355474]),
  (k = 7)
)

console.log(areTwoArrayEqual(resp, [560573909, 171310323, 669355474, 62295992, 5313698, 842699354, 372590546])) //;[239084671, 589204657, 43871615]


resp = topStudents(
  (positive_feedback = ['fkeofjpc', 'qq', 'iio']),
  (negative_feedback = [
    'jdh',
    'khj',
    'eget',
    'rjstbhe',
    'yzyoatfyx',
    'wlinrrgcm'
  ]),
  (report = [
    'rjstbhe eget kctxcoub urrmkhlmi yniqafy fkeofjpc iio yzyoatfyx khj iio',
    'gpnhgabl qq qq fkeofjpc dflidshdb qq iio khj qq yzyoatfyx',
    'tizpzhlbyb eget z rjstbhe iio jdh jdh iptxh qq rjstbhe',
    'jtlghe wlinrrgcm jnkdbd k iio et rjstbhe iio qq jdh',
    'yp fkeofjpc lkhypcebox rjstbhe ewwykishv egzhne jdh y qq qq',
    'fu ql iio fkeofjpc jdh luspuy yzyoatfyx li qq v',
    'wlinrrgcm iio qq omnc sgkt tzgev iio iio qq qq',
    'd vhg qlj khj wlinrrgcm qq f jp zsmhkjokmb rjstbhe'
  ]),
  (student_id = [
    96537918, 589204657, 765963609, 613766496, 43871615, 189209587, 239084671,
    908938263
  ]),
  (k = 3)
)

console.log(areTwoArrayEqual(resp, [239084671, 589204657, 43871615])) //;[239084671, 589204657, 43871615]

console.log(
  topStudents(
    (positive_feedback = ['smart', 'brilliant', 'studious']),
    (negative_feedback = ['not']),
    (report = ['this student is not studious', 'the student is smart']),
    (student_id = [1, 2]),
    (k = 2)
  )
)

console.log(
  topStudents(
    (positive_feedback = ['smart', 'brilliant', 'studious']),
    (negative_feedback = ['not']),
    (report = ['this student is studious', 'the student is smart']),
    (student_id = [1, 2]),
    (k = 2)
  )
)
