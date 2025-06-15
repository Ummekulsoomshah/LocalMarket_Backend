function getSimilarProducts(currentProduct, allProducts) {
  return allProducts
    .filter(p => p.id !== currentProduct.id && p.tags !== null && currentProduct.tags !== null)
    .map(p => {
      const score = calculateSimilarity(currentProduct.tags, p.tags);
      return { product: p, score };
    })
    .filter(p => !isNaN(p.score) && p.score > 0) // ignore NaN or zero similarity
    .sort((a, b) => b.score - a.score)
    .slice(0, 4); // top 4 recommendations
}
function calculateSimilarity(tagsA, tagsB) {
  const arrayA = typeof tagsA === 'string' ? tagsA.split(',').map(t => t.trim().toLowerCase()) : [];
  const arrayB = typeof tagsB === 'string' ? tagsB.split(',').map(t => t.trim().toLowerCase()) : [];

  if (arrayA.length === 0 || arrayB.length === 0) return 0;

  const setA = new Set(arrayA);
  const setB = new Set(arrayB);
  const intersection = [...setA].filter(tag => setB.has(tag));

  return intersection.length / (Math.sqrt(setA.size) * Math.sqrt(setB.size));
}
module.exports = { getSimilarProducts };