# BrainRexApi.LanguageApi

All URIs are relative to *https://api.brainrex.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languageGetCryptoEntities**](LanguageApi.md#languageGetCryptoEntities) | **POST** /entity/get_crypto_entities | Extracts known crypto entities like coin names, exchanges, media from text.
[**languageGetGeneralSentiment**](LanguageApi.md#languageGetGeneralSentiment) | **POST** /sentiment/get_general_sentiment | Returns a -1 to 1 score, depending on positive/negative sentiment
[**languageGetPriceSentiment**](LanguageApi.md#languageGetPriceSentiment) | **POST** /language/get_price_sentiment | Sentiment analysis score using a model trained for buy signals.

<a name="languageGetCryptoEntities"></a>
# **languageGetCryptoEntities**
> languageGetCryptoEntities(body)

Extracts known crypto entities like coin names, exchanges, media from text.

The Crypto Entities endpoint ingests written MIT Digital Currency Initiative Paper A paper describing how our sentiment and entity analyzer are built. And how the can be used for trading several cryptocurrencies successfully  We prove that using sentiment only as a input to a trading algorithm can be profitable. If combined with other machine learning models. We descri This Paper could be published in MIT Crypto Economics Journal . . &lt;br&gt;&lt;br&gt; Our AI selects from several models, choosing the one that fits the given data best, and we give you the avality to customize the sensitivy of the model. Our model has been trained to recognize anomalies in popular blockchain networks e.g. Bitcoin, Ethereum, learning from past events.

### Example
```javascript
import {BrainRexApi} from 'brain_rex_api';
let defaultClient = BrainRexApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainRexApi.LanguageApi();
let body = new BrainRexApi.Text(); // Text | String of text to be analyze for investor sentiment.

apiInstance.languageGetCryptoEntities(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Text**](Text.md)| String of text to be analyze for investor sentiment. | 

### Return type

null (empty response body)

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="languageGetGeneralSentiment"></a>
# **languageGetGeneralSentiment**
> &#x27;String&#x27; languageGetGeneralSentiment(body)

Returns a -1 to 1 score, depending on positive/negative sentiment

This endpoints returns a score from -1 to +1 where depending on negative or positive attitude in the text.

### Example
```javascript
import {BrainRexApi} from 'brain_rex_api';
let defaultClient = BrainRexApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainRexApi.LanguageApi();
let body = new BrainRexApi.Text(); // Text | String of text to be analyze for general sentiment.

apiInstance.languageGetGeneralSentiment(body, (error, data, response) => {
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
 **body** | [**Text**](Text.md)| String of text to be analyze for general sentiment. | 

### Return type

**&#x27;String&#x27;**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="languageGetPriceSentiment"></a>
# **languageGetPriceSentiment**
> &#x27;String&#x27; languageGetPriceSentiment(body)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example
```javascript
import {BrainRexApi} from 'brain_rex_api';
let defaultClient = BrainRexApi.ApiClient.instance;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix = 'Token';

let apiInstance = new BrainRexApi.LanguageApi();
let body = new BrainRexApi.Text(); // Text | String of text to be analyze for investor sentiment.

apiInstance.languageGetPriceSentiment(body, (error, data, response) => {
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
 **body** | [**Text**](Text.md)| String of text to be analyze for investor sentiment. | 

### Return type

**&#x27;String&#x27;**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

