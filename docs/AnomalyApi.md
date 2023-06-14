# BrainRexApi.AnomalyApi

All URIs are relative to *https://api.brainrex.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anomalyBatch**](AnomalyApi.md#anomalyBatch) | **POST** /anomaly/json/detect | Detects anomalies in historical data in batches. This endpoint uses your entire dataset as input

<a name="anomalyBatch"></a>
# **anomalyBatch**
> [&#x27;Boolean&#x27;] anomalyBatch(opts)

Detects anomalies in historical data in batches. This endpoint uses your entire dataset as input

The Anomaly Detect endpoint ingests time series data of all types, then monitors and detects abnormalities historical time series data. &lt;br&gt;&lt;br&gt; Our AI selects from several models, choosing the one that fits the given data best, and we give you the avality to customize the sensitivy of the model. Our model has been trained to recognize anomalies in popular blockchain networks e.g. Bitcoin, Ethereum, learning from past events.

### Example
```javascript
import {BrainRexApi} from 'brain_rex_api';
let defaultClient = BrainRexApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainRexApi.AnomalyApi();
let opts = { 
  'body': [new BrainRexApi.PointTimeSeries()] // [PointTimeSeries] | Time Series to be analyzed, with the following format.
};
apiInstance.anomalyBatch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[PointTimeSeries]**](PointTimeSeries.md)| Time Series to be analyzed, with the following format. | [optional] 

### Return type

**[&#x27;Boolean&#x27;]**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

