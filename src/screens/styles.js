import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    imageList: {
      marginTop: 16,
    },
    imageContainer: {
      margin: 8,
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: "stretch"
    },
    imageText: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      button: {
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 4,
        marginBottom: 16,
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      selectedFile: {
        marginBottom: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        padding: 12,
        marginBottom: 16,
        marginTop: 20,
        width: '100%',
      },
      saveButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 4,
        marginBottom: 16,
        width: '100%',
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#f2f2f2',
      },
      backButton: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      content: {
        flex: 1,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 16,
      },
      tabIndicator: {
        backgroundColor: '#333',
      },
      tabBarStyle: {
        backgroundColor: '#f2f2f2',
        elevation: 0, // Remove shadow on Android
        shadowOpacity: 0, // Remove shadow on iOS
      },
      tabLabel: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      tabStyle: {
        width: 'auto', // Adjust the width as needed
        paddingHorizontal: 12,
      },
  });