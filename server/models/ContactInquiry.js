import mongoose from "mongoose";

const contactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    phone: { type: String, trim: true, maxlength: 30, default: "" },
    organization: { type: String, trim: true, maxlength: 120, default: "" },
    inquiryType: {
      type: String,
      required: true,
      enum: ["Group inquiry", "Partnership", "Media & insights", "Business opportunity", "Other"],
    },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    status: { type: String, enum: ["new", "reviewed", "closed"], default: "new" },
  },
  { timestamps: true },
);

export default mongoose.models.ContactInquiry || mongoose.model("ContactInquiry", contactInquirySchema);
