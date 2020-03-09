# rest framework imports
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

# custom modules
from catchposts.utilities import scrapper


@api_view(['POST'])
def scrap(request):
    url = request.data.get('url', None)
    access_token = request.data.get('access_token', None)

    if not url or not access_token:
        return Response({"error": "Required fields url or access_token not found."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        emails, phones = scrapper.scrap(access_token=access_token, url=url)
    except Exception as ex:
        error = {"error": str(ex)}
        return Response(error, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    data = {
        "data": {
            "emails": emails,
            "phones": phones}
    }

    return Response(data, status=status.HTTP_200_OK)
