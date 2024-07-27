function calculateTotal() {
    // Get input values for goblets
    let rustGoblets = document.getElementById('rustGoblets').value || 0;
    let bronzeGoblets = document.getElementById('bronzeGoblets').value || 0;
    let silverGoblets = document.getElementById('silverGoblets').value || 0;
    let goldGoblets = document.getElementById('goldGoblets').value || 0;

    // Get input values for jars
    let bronzeJars = document.getElementById('bronzeJars').value || 0;
    let silverJars = document.getElementById('silverJars').value || 0;
    let goldJars = document.getElementById('goldJars').value || 0;

    // Get input values for rings
    let silverRings = document.getElementById('silverRings').value || 0;
    let goldRings = document.getElementById('goldRings').value || 0;

    // Get input values for trinkets
    let ancientCoin = document.getElementById('ancientCoin').value || 0;
    let goldCrown = document.getElementById('goldCrown').value || 0;
    let redJewel = document.getElementById('redJewel').value || 0;
    let greenJewel = document.getElementById('greenJewel').value || 0;
    let perfectCrystal = document.getElementById('perfectCrystal').value || 0;

    // Calculate total Yen
    let totalYen = (rustGoblets * 12) + (bronzeGoblets * 16) + (silverGoblets * 32) + (goldGoblets * 48) +
        (bronzeJars * 20) + (silverJars * 42) + (goldJars * 90) +
        (silverRings * 32) + (goldRings * 54) +
        (ancientCoin * 120) + (goldCrown * 200) + (redJewel * 400) + (greenJewel * 3100) + (perfectCrystal * 6000);

    // Display total Yen
    document.getElementById('totalYen').textContent = "Total Yen: " + totalYen;
}
