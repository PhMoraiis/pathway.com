import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { generateOpenApiDocument } from "zsa-openapi";
import { router } from "@/app/api/[[...openapi]]/_router/index";

export default async function DocsPage() {
	const spec = await generateOpenApiDocument(router, {
		title: "Pathway API",
		version: "0.1.0",
		baseUrl: "http://localhost:3000",
		description: "Pathway is a simple app for management paths financials.",
		docsUrl: "http://localhost:3000/docs",
	});

	return <SwaggerUI spec={spec} />;
}
