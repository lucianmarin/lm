from starlette.applications import Starlette
from starlette.responses import RedirectResponse
from starlette.templating import Jinja2Templates
from starlette.routing import Mount, Route
from starlette.staticfiles import StaticFiles
from local import DEBUG

templates = Jinja2Templates("pages", auto_reload=DEBUG)


async def lm(request):
    return templates.TemplateResponse(request, "lm.html")


async def x(request):
    return templates.TemplateResponse(request, "x.html")


async def r(request):
    return RedirectResponse('/')


routes = [Route('/', lm), Route('/x', x), Route('/{r}', r)]

if DEBUG:
    routes.append(Mount(
        '/static', app=StaticFiles(directory='static'), name="static"
    ))

app = Starlette(debug=DEBUG, routes=routes)
