export type AmplifyDependentResourcesAttributes = {
    "api": {
        "amplifyapp": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "apirf": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "auth": {
        "amplifyapp": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "storage": {
        "invoices": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "SortKeyName": "string",
            "SortKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "invoicesLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}