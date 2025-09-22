import { config } from 'dotenv';
config();

import '@/ai/flows/intelligent-testimonial-selection.ts';
import '@/ai/flows/contact-form-flow.ts';
// Note: contact-form-types.ts is not a flow, so it does not need to be imported here.
