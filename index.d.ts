declare module '@apiverve/titlecapitalization' {
  export interface titlecapitalizationOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface titlecapitalizationResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class titlecapitalizationWrapper {
    constructor(options: titlecapitalizationOptions);

    execute(callback: (error: any, data: titlecapitalizationResponse | null) => void): Promise<titlecapitalizationResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: titlecapitalizationResponse | null) => void): Promise<titlecapitalizationResponse>;
    execute(query?: Record<string, any>): Promise<titlecapitalizationResponse>;
  }
}
