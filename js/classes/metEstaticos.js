class ResourceProcessStation {
  constructor(name, monthlyProcessing) {
    this.name = name;
    this.monthlyProcessing = monthlyProcessing;
  }

  static calculateProcessInHours(monthlyProcessing, hours) {
    return monthlyProcessing / 720 * hours;
  }
}

let totalProcessing = ResourceProcessStation.calculateProcessInHours(500, 6);;

console.log(totalProcessing);