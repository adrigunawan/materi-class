class Kue {
  constructor(gula, asesoris, berat) {
    this._bahan = "tepung";
    this._gula = gula;
    this._asesoris = asesoris;
    this._berat = berat;
  }

  // Getter bahan
  get bahan() {
    return this._bahan;
  }

  // Getter gula
  get gula() {
    return this._gula;
  }

  // Getter asesoris
  get asesoris() {
    return this._asesoris;
  }

  // Getter berat
  get berat() {
    return this._berat;
  }

  // Setter gula
  set gula(value) {
    this._gula = value;
  }

  // Setter asesoris
  set asesoris(value) {
    this._asesoris = value;
  }

  // Setter berat
  set berat(value) {
    this._berat = value;
  }
}
// Kue putu
class KuePutu extends Kue {
  constructor(gulaLevel, ...args) {
    super(...args);
    this._gulaLevel = gulaLevel;
  }

  get gulaLevel () {
      return this._gulaLevel;
  }

  set gulaLevel (value) {
      this._gulaLevel = value;
  }
}

// Kue cubit
class KueCubit extends Kue {
  constructor(...args) {
    super(...args);  
    this._bahan = ["Tepung", "Telur"];
  }
}

class KueKetawa extends Kue {
  constructor(...params) {
    super(...params);
    this._bahan = ["Tepung", "Telur"];
  }
}

const kuePutuObj = new KuePutu(20, "Gula Jawa", "Daun Pisang", 10);
console.log(kuePutuObj);

const kueCubit = new KueCubit("Gula putih", "Messes", 20);
console.log(kueCubit);

const kueKetawa = new KueKetawa("Gula pasir", "Wijen", 5);
console.log(kueKetawa)