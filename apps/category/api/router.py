from django.urls import path
from apps.category.api.views import ListCategoriesView

urlpatterns = [
    path('categories/list', ListCategoriesView.as_view()),
]
