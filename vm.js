const nodeVM = require('vm');
const f = (req, res) => nodeVM.run(req.body.code);

const b = Buffer.allocUnsafe(10)
b.readUint8(0, true)

export default f
