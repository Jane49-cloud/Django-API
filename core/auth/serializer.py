from rest_framework import serializers
from core.user.serializers import UserSerializer
from core.user.models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login


class RegistrationSerializer(UserSerializer):
    password = serializers.CharField(
        max_length=128, min_length=8, write_only=True, required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'id',
            'username',
            'first_name',
            'last_name',
            'bio',
            'avatar',
            'email',
            'password',
        ]

    def create(self, validated_data):
        # uses the create method created in the model
        return User.objects.create_user(**validated_data)


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)
        return data
