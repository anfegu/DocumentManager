import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const AddDocumentScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentDetails, setDocumentDetails] = useState({
    title: '',
  });

  const navigation = useNavigation();

  const handleFileSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveDocument = () => {
    // Save the document and its details to your data structure
    console.log('Selected File:', selectedFile);
    console.log('Document Details:', documentDetails);
    const newDocument = {
      title: documentDetails.title,
      description: documentDetails.description,
      link: selectedFile[0].uri,
      type: selectedFile[0].type,
    };
    navigation.navigate('Home', { document: newDocument });
  };

  const renderIcon = (item) => {
    const isImage = (item.type == "image/jpeg");
    const isPdf = (item.type == "application/pdf");
    return isImage ? 
      <Image source={{ uri: item.uri }} style={styles.image} /> 
      : isPdf ? 
      <Image source={require('../assets/icons/pdf.png')} style={[styles.image, {resizeMode: 'stretch'}]} /> 
      : <Image source={require('../assets/icons/random-icon.png')} style={styles.image} /> ;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleFileSelection}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
      {selectedFile && renderIcon(selectedFile[0])}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={documentDetails.title}
        onChangeText={(text) =>
          setDocumentDetails((prevDetails) => ({ ...prevDetails, title: text }))
        }
      />

      <TouchableOpacity disabled={!(selectedFile && documentDetails.title)} style={styles.saveButton} onPress={handleSaveDocument}>
        <Text style={styles.saveButtonText}>Save File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddDocumentScreen;
