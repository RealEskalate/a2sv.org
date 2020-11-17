const _ = require('lodash')

module.exports = validationSchema => {
  return (req, res, next) => {
    const { error } = validationSchema.validate(req.body, { abortEarly: false })
    if (error) {
      const response = _.map(error.details, detail => _.pick(detail, ['path', 'message']))
      return res.status(422).send(response)
    }
    next()
  }
}
