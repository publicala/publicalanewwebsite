// OpenNext configuration for Cloudflare Workers
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
	// Use default caching instead of R2 for simplicity
});
