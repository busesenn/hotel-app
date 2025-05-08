import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const UserAgreement = ({ onAccept }) => {
    const navigate = useNavigation()
    const [agreed, setAgreed] = useState(false);

    const handleToggle = () => {
        setAgreed(!agreed);
    };

    const handleJoinUs = () => {
        Alert.alert("Başarılı bir şekilde giriş yaptınız", "",
            [
                {
                    text: "Ok"
                }
            ]
        )
        navigate.navigate("MainPage")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Sözleşmesi</Text>

            <ScrollView style={styles.scrollBox}>
                <Text style={styles.agreementText}>
                    <Text>Bu kullanıcı sözleşmesi, TripNest mobil uygulamasını kullanmadan önce okunmalı ve kabul edilmelidir.
                    </Text>
                    {'\n\n'}
                    1.⁠ Kullanım Koşulları:
                    Uygulamayı kullanarak bu sözleşmenin tüm şartlarını kabul etmiş sayılırsınız. Kabul etmiyorsanız uygulamayı kullanmayınız.
                    {'\n\n'}
                    2. Hizmet Tanımı:
                    Uygulama, otel arama, otel detaylarını görüntüleme, rezervasyon yapma ve favori otelleri listeleme gibi hizmetler sunar.
                    {'\n\n'}
                    3. Üyelik ve Kayıt:
                    Bazı hizmetlerden yararlanmak için kullanıcı hesabı oluşturmanız gerekebilir. Verdiğiniz bilgilerin doğru ve güncel olması sizin sorumluluğunuzdadır.
                    {'\n\n'}
                    4. ⁠Rezervasyonlar:
                    Yaptığınız rezervasyonlar, otel politikalarına ve mevcut şartlara göre onaylanır. Rezervasyon değişikliği veya iptali otelin şartlarına bağlıdır.
                    {'\n\n'}
                    5. Favoriler:
                    Favorilere eklenen oteller sadece cihazınızda saklanır ve başka kullanıcılarla paylaşılmaz.
                    {'\n\n'}
                    6.⁠ ⁠Kullanıcı Sorumluluğu:
                    Uygulama içindeki işlemlerinizden siz sorumlusunuz. Üçüncü kişilerin haklarını ihlal eden veya yasalara aykırı işlemler yapamazsınız.
                    {'\n\n'}
                    7. Veri Gizliliği:
                    Kullanıcı bilgileri ve kişisel veriler, KVKK kapsamında gizli tutulur ve üçüncü şahıslarla paylaşılmaz. Detaylı bilgi için Gizlilik Politikamıza bakınız.
                    {'\n\n'}
                    8. ⁠⁠Uygulama Güncellemeleri:
                    Uygulama, zaman zaman güncellenebilir. Kullanıcı deneyimini geliştirmek için bazı özellikler değiştirilebilir veya kaldırılabilir.
                    {'\n\n'}
                    9.⁠ Fesih ve Erişim Engeli:
                    Kullanım şartlarına aykırı davranışlar durumunda, uygulama yönetimi hesabınızı askıya alma veya silme hakkına sahiptir.
                    {'\n\n'}
                    10. ⁠Değişiklik Hakkı:
                    Bu sözleşme, uygulama geliştiricisi tarafından güncellenebilir. Değişiklikler uygulama içinde duyurulur ve yayından sonra geçerli olur.
                    `;
                </Text>
            </ScrollView>

            <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
                <Icon
                    name={agreed ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    size={26}
                    color={agreed ? '#4CAF50' : '#aaa'}
                />
                <Text style={styles.checkboxText}>Okudum ve kabul ediyorum.</Text>
            </TouchableOpacity>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: agreed ? '#4CAF50' : '#ccc' }]}
                    onPress={() => {
                        handleJoinUs()

                    }}

                    disabled={!agreed}
                >
                    <Text style={styles.buttonText}>Bize katıl</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#f7f4ea",
        marginTop: 50
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollBox: {
        maxHeight: 550,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    agreementText: {
        fontSize: 15,
        color: '#444',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
    button: {
        paddingVertical: 12,
        width: 150,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default UserAgreement