function calculate() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    // Hitung Berat Badan Ideal (Rumus Broca)
    const idealWeight = gender === "Laki-laki" ? (height - 100) - (height - 100) * 0.1 : (height - 100) - (height - 100) * 0.15;
  
    // Hitung IMT (Indeks Massa Tubuh)
    const bmi = weight / Math.pow(height / 100, 2);
  
    // Kebutuhan Kalori (BMR)
    const bmr = gender === "Laki-laki"
      ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
      : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    const dailyCalories = bmr * activity;
  
    // Makronutrien
    const protein = (0.15 * dailyCalories) / 4;
    const carbs = (0.6 * dailyCalories) / 4;
    const fats = (0.25 * dailyCalories) / 9;
  
    // Tampilkan hasil dalam modal
    document.getElementById("modalIdealWeight").innerText = `Berat Badan Ideal Anda: ${idealWeight.toFixed(2)} kg`;
    document.getElementById("modalBMI").innerText = `Indeks Massa Tubuh (IMT): ${bmi.toFixed(2)} (status ${(bmi < 18.5 ? "Kurus" : bmi < 24.9 ? "Normal" : "Overweight")})`;
    document.getElementById("modalCalories").innerText = `Kebutuhan Energi Harian: ${dailyCalories.toFixed(2)} kcal`;
    document.getElementById("modalMacros").innerText = `Protein: ${protein.toFixed(2)} gram, Karbohidrat: ${carbs.toFixed(2)} gram, Lemak: ${fats.toFixed(2)} gram`;
  
    // Tampilkan modal
    const resultModal = new bootstrap.Modal(document.getElementById("resultModal"));
    resultModal.show();
  }
  