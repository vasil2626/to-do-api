const mongoose = require('mongoose'),
 {Schema} = mongoose;

const FormSchema = new Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String
		},
		message: {
			type: String,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
		}
	}
);

module.exports = mongoose.model('Form', FormSchema);
