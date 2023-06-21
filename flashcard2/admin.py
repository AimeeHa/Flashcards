from django.contrib import admin
from .models import User, FlashcardSet, Flashcard, ViewedSet, SavedCard, SavedSet   
# Register your models here.

admin.site.register(User)
admin.site.register(FlashcardSet)
admin.site.register(Flashcard)
admin.site.register(ViewedSet)
admin.site.register(SavedCard)
admin.site.register(SavedSet)