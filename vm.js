const nodeVM = require('vm');
const f = (req, res) => nodeVM.run(req.body.code);
export default f
