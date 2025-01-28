import * as WebBrowser from 'expo-web-browser';

const MyComponent = () => {
  const handlePress = async () => {
    try {
      let result = await WebBrowser.openBrowserAsync('https://example.com');
      if (result.type === 'cancel') {
        console.log('User cancelled');
      } else if (result.type === 'dismiss') {
        console.log('Browser dismissed');
      } else if (result.type === 'success') {
          if(result.url === 'https://example.com'){
            console.log('Successfully opened the browser');
          }else{
            console.log('Browser opened but unexpected URL:', result.url);
          }
      } else {
        console.error('Unexpected result:', result);
      }
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  };

  return (
    <Button title="Open Browser" onPress={handlePress} />
  );
};