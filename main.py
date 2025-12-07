from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from local import DEBUG

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates("pages", auto_reload=DEBUG)


@app.get("/", response_class=HTMLResponse)
def lm(request: Request):
    return templates.TemplateResponse(request, "lm.html")


@app.get("/x", response_class=HTMLResponse)
def x(request: Request):
    return templates.TemplateResponse(request, "x.html")


@app.get("/{path}", response_class=RedirectResponse)
def redirect(request: Request, path):
    if path in ['xcalc', 'num']:
        return RedirectResponse('/x')
    return RedirectResponse('/')
