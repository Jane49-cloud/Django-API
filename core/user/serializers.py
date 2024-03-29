from rest_framework import serializers
from core.user.models import User
from core.abstract.serializers import AbstractSerializer


class UserSerializer(AbstractSerializer):
    id = serializers.UUIDField(
        source='public_id', read_only=True, format='hex')

    class Meta:
        model = User
        fields = [

            'username',
            'first_name',
            'last_name',
            'bio',
            'avatar',
            'email',
            'is_active',
            "id",
            "public_id"

        ]
        read_only_field = ["is_active"]
