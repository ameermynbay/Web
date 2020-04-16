from django.urls import path
from api.views.views_fbv import company_list, company_detail, vacancy_list, vacancy_detail, company_vacancies
from api.views.views_cbv import CompanyListAPIView, CompanyDetailAPIView, VacancyListAPIView, VacancyDetailAPIView


urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:id>/', CompanyDetailAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', company_vacancies)
]