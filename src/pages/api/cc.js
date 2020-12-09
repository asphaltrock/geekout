const locations = [
    "Simei CC", "Bedok CC"
]


function api(req, res) {
  res.statusCode = 200;
  res.json(sampleDonations);
}

export default api;