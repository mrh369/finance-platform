from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirmPassword']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        # TODO: This is currently using the default User model error logic, need to fix that and/or the way displaying errors on the form.
        if User.objects.filter(username=attrs['username']).exists():
            raise serializers.ValidationError({"errors": "Username is already taken."})

        if User.objects.filter(email=attrs['email']).exists():
            raise serializers.ValidationError({"errors": "Email is already registered."})

        if attrs['password'] != attrs['confirmPassword']:
            raise serializers.ValidationError({"errors": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user