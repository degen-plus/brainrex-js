# Brainrex.AnomalyApi

All URIs are relative to *https://api.bitlongs.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anomalyBatch**](AnomalyApi.md#anomalyBatch) | **POST** /anomaly/json/detect | Detects anomalies in historical data in batches. This endpoint uses your entire dataset as input


<a name="anomalyBatch"></a>
# **anomalyBatch**
> ['Boolean'] anomalyBatch(opts)

Detects anomalies in historical data in batches. This endpoint uses your entire dataset as input

The Anomaly Detect endpoint ingests time series data of all types, then monitors and detects abnormalities historical time series data. <br><br> Our AI selects from several models, choosing the one that fits the given data best, and we give you the avality to customize the sensitivy of the model. Our model has been trained to recognize anomalies in popular blockchain networks e.g. Bitcoin, Ethereum, learning from past events.

### Example
```javascript
var Brainrex = require('brainrex');
var defaultClient = Brainrex.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new Brainrex.AnomalyApi();

var opts = { 
  'request': new Brainrex.TimeSeries() // TimeSeries | Time Series to be analyzed, with the following format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.anomalyBatch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TimeSeries**](TimeSeries.md)| Time Series to be analyzed, with the following format. | [optional] 

### Return type

**['Boolean']**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

