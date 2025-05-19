export function generateTheme(data) {
  return {
    message: JSON.stringify(
      `Généré avec succès pour ${data.user} avec la couleur ${data.color}`
    ),
  };
}
