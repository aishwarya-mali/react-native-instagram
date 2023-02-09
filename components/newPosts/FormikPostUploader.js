import { View, Text, Image, TextInput, Button } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import Separator from '../Separator';

const PLACEHOLDER_IMG = 'https://via.placeholder.com/150/FFFFFF/000000/';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = React.useState(PLACEHOLDER_IMG)
  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
          <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }} style={{ width: 100, height: 100 }}></Image>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: '#fff', fontSize: 18 }}
                placeholder='Write a caption...'
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Separator />
          <View style={{ marginHorizontal: 20 }}>
            <TextInput
              onChange={e => setThumbnailUrl(e.nativeEvent.text)}
              style={{ color: '#fff', fontSize: 16 }}
              placeholder='Enter Image Url...'
              placeholderTextColor='gray'
              onChangeText={handleChange('imageUrl')}
              onBlur={handleBlur('imageUrl')}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text style={{ color: 'red', fontSize: 10 }}>{errors.imageUrl}</Text>
            )}
          </View>
          <View style={{marginHorizontal: 50, marginTop: 10}}>
            <Button onPress={handleSubmit} title='Share' disabled={!isValid}></Button>
          </View>
        </>
      )}
    </Formik>
  )
}

export default FormikPostUploader